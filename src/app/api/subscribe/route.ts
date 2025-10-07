import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g. "us1"
});

export async function POST(request: NextRequest) {
  try {
    const { email, role } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!audienceId) {
      console.error("MAILCHIMP_AUDIENCE_ID is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare member data
    const memberData: any = {
      email_address: email,
      status: "subscribed",
    };

    // Add role as a tag if provided
    if (role) {
      memberData.tags = [role];
    }

    // Add to Mailchimp audience
    const response = await mailchimp.lists.addListMember(
      audienceId,
      memberData
    );

    return NextResponse.json(
      {
        message: "Successfully subscribed to waitlist!",
        id: response.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Mailchimp subscription error:", error);

    // Handle specific Mailchimp errors
    if (
      error.status === 400 &&
      error.response?.body?.title === "Member Exists"
    ) {
      return NextResponse.json(
        { error: "This email is already subscribed to our waitlist!" },
        { status: 409 }
      );
    }

    // Handle rate limiting
    if (error.status === 429) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}

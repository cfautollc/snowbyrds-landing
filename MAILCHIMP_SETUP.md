# Mailchimp Integration Setup

This document explains how to configure Mailchimp for your Snowbyrds landing page.

## Prerequisites

1. A Mailchimp account
2. A Mailchimp audience (mailing list) set up

## Configuration Steps

### 1. Get Your Mailchimp API Key

1. Log into your Mailchimp account
2. Go to **Account** → **Extras** → **API keys**
3. Create a new API key or copy an existing one

### 2. Get Your Audience ID

1. In Mailchimp, go to **Audience** → **All contacts**
2. Click on **Settings** → **Audience name and defaults**
3. Copy the **Audience ID** (it looks like: `a1b2c3d4e5`)

### 3. Get Your Server Prefix

Your server prefix is part of your API key. For example:

- If your API key ends with `-us1`, your server prefix is `us1`
- If your API key ends with `-us2`, your server prefix is `us2`
- And so on...

### 4. Update Environment Variables

Update your `.env.local` file with your actual Mailchimp credentials:

```env
# Replace these with your actual Mailchimp values
MAILCHIMP_API_KEY=your_actual_api_key_here-us1
MAILCHIMP_AUDIENCE_ID=your_actual_audience_id_here
MAILCHIMP_SERVER_PREFIX=us1
```

**Important:** Never commit your `.env.local` file to version control!

## Features

The integration includes:

### ✅ Email Validation

- Client-side and server-side email validation
- Proper error messages for invalid emails

### ✅ Role Tagging

- When users select "I'm a Guest" or "I'm a Host", they get tagged in Mailchimp
- Tags help you segment your audience later

### ✅ Duplicate Detection

- Handles users who try to subscribe multiple times
- Shows appropriate message for already subscribed emails

### ✅ Error Handling

- Network errors
- Rate limiting
- Mailchimp API errors
- User-friendly error messages

### ✅ Success Feedback

- Clear success messages
- Form resets after successful submission

## Testing

1. **Development Testing:**

   ```bash
   npm run dev
   ```

   Test the form on your local development server.

2. **Production Testing:**
   After deploying, make sure to:
   - Set environment variables in your hosting platform
   - Test the live form
   - Check your Mailchimp audience for new subscribers

## Troubleshooting

### Common Issues

1. **"Server configuration error"**

   - Check that `MAILCHIMP_AUDIENCE_ID` is set correctly

2. **"Invalid API key"**

   - Verify your `MAILCHIMP_API_KEY` is correct
   - Make sure the server prefix matches your API key

3. **"Member Exists" errors**

   - This is normal - the system handles duplicate subscriptions gracefully

4. **Rate limiting**
   - Mailchimp has rate limits. The integration handles this automatically.

### Mailchimp Dashboard

After successful integration, you can:

- View new subscribers in your Mailchimp audience
- See role tags (guest/host) applied to subscribers
- Create targeted campaigns based on roles
- Export subscriber data for analysis

## Security Notes

- API keys are kept server-side only
- No sensitive data is exposed to the client
- Email addresses are validated before sending to Mailchimp
- Rate limiting is handled gracefully

## Next Steps

Consider setting up:

1. **Welcome email automation** in Mailchimp for new subscribers
2. **Different email sequences** for guests vs hosts
3. **Analytics tracking** for form submissions
4. **A/B testing** different form variations

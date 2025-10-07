declare module "@mailchimp/mailchimp_marketing" {
  interface MailchimpConfig {
    apiKey?: string;
    accessToken?: string;
    server?: string;
  }

  interface MemberData {
    email_address: string;
    status:
      | "subscribed"
      | "unsubscribed"
      | "cleaned"
      | "pending"
      | "transactional";
    tags?: string[];
    merge_fields?: Record<string, any>;
    interests?: Record<string, boolean>;
    language?: string;
    vip?: boolean;
    location?: {
      latitude: number;
      longitude: number;
    };
    marketing_permissions?: Array<{
      marketing_permission_id: string;
      enabled: boolean;
    }>;
    ip_signup?: string;
    timestamp_signup?: string;
    ip_opt?: string;
    timestamp_opt?: string;
  }

  interface Member extends MemberData {
    id: string;
    unique_email_id: string;
    contact_id: string;
    full_name: string;
    web_id: number;
    email_type: string;
    status:
      | "subscribed"
      | "unsubscribed"
      | "cleaned"
      | "pending"
      | "transactional";
    unsubscribe_reason?: string;
    consents_to_one_to_one_messaging: boolean;
    merge_fields: Record<string, any>;
    interests: Record<string, boolean>;
    stats: {
      avg_open_rate: number;
      avg_click_rate: number;
      ecommerce_data: {
        total_revenue: number;
        number_of_orders: number;
        currency_code: string;
      };
    };
    ip_signup: string;
    timestamp_signup: string;
    ip_opt: string;
    timestamp_opt: string;
    member_rating: number;
    last_changed: string;
    language: string;
    vip: boolean;
    email_client: string;
    location: {
      latitude: number;
      longitude: number;
      gmtoff: number;
      dstoff: number;
      country_code: string;
      timezone: string;
      region: string;
    };
    marketing_permissions: Array<{
      marketing_permission_id: string;
      text: string;
      enabled: boolean;
    }>;
    last_note: {
      note_id: number;
      created_at: string;
      created_by: string;
      note: string;
    };
    source: string;
    tags_count: number;
    tags: Array<{
      id: number;
      name: string;
    }>;
    list_id: string;
    _links: Array<{
      rel: string;
      href: string;
      method: string;
      targetSchema: string;
      schema: string;
    }>;
  }

  interface Lists {
    addListMember(listId: string, memberData: MemberData): Promise<Member>;
    getListMember(listId: string, subscriberHash: string): Promise<Member>;
    updateListMember(
      listId: string,
      subscriberHash: string,
      memberData: Partial<MemberData>
    ): Promise<Member>;
    deleteListMember(listId: string, subscriberHash: string): Promise<void>;
  }

  interface Mailchimp {
    lists: Lists;
    setConfig(config: MailchimpConfig): void;
  }

  const mailchimp: Mailchimp;
  export default mailchimp;
}

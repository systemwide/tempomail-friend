
export interface Address {
  id: string;
  email: string;
  created_at: string;
  expires_at: string;
}

export interface Message {
  id: string;
  address_id: string;
  sender: string;
  subject: string;
  body: string;
  received_at: string;
}

export interface Attachment {
  id: string;
  message_id: string;
  filename: string;
  content_type: string | null;
  size: number | null;
  storage_path: string;
  created_at: string;
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      friend_requests: {
        Row: {
          actioned_at: string | null
          created_at: string
          from_user_id: string
          id: string
          state: Database['public']['Enums']['friend_request_state']
          to_user_id: string
        }
        Insert: {
          actioned_at?: string | null
          created_at?: string
          from_user_id?: string
          id?: string
          state?: Database['public']['Enums']['friend_request_state']
          to_user_id: string
        }
        Update: {
          actioned_at?: string | null
          created_at?: string
          from_user_id?: string
          id?: string
          state?: Database['public']['Enums']['friend_request_state']
          to_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'friend_requests_from_user_id_fkey'
            columns: ['from_user_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'friend_requests_to_user_id_fkey'
            columns: ['to_user_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      friends: {
        Row: {
          created_at: string
          id: string
          profile_a_id: string
          profile_b_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          profile_a_id: string
          profile_b_id: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_a_id?: string
          profile_b_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'friends_profile_a_id_fkey'
            columns: ['profile_a_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'friends_profile_b_id_fkey'
            columns: ['profile_b_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_path: string | null
          created_at: string
          id: string
          name: string
        }
        Insert: {
          avatar_path?: string | null
          created_at?: string
          id: string
          name?: string
        }
        Update: {
          avatar_path?: string | null
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      friend_distances: {
        Row: {
          distance: number | null
          id: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'user_locations_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Functions: {
      preview_profile: {
        Args: {
          id: string
        }
        Returns: {
          avatar_path: string | null
          created_at: string
          id: string
          name: string
        }
      }
      update_user_location: {
        Args: {
          latitude: number
          longitude: number
        }
        Returns: undefined
      }
      viewer: {
        Args: Record<PropertyKey, never>
        Returns: {
          avatar_path: string | null
          created_at: string
          id: string
          name: string
        }
      }
    }
    Enums: {
      friend_request_state: 'PENDING' | 'CANCELLED' | 'REJECTED' | 'ACCEPTED'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'buckets_owner_fkey'
            columns: ['owner']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey'
            columns: ['bucket_id']
            referencedRelation: 'buckets'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

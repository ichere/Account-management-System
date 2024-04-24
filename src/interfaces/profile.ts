export interface ProfileInterface {
    createdAt: string;
    deletedAt: string | null;
    description: string;
    name: string;
    id: number;
    accountNumber: number;
    bankName: string;
    title: string;
    updatedAt: string;
    userId: number;
}

export interface ProfileProps {
    profile: ProfileInterface;
}
  
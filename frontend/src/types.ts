export interface FinancialTerm {
  id: number;
  name: string;
  explanation: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
export class AppError extends Error {
  constructor(public code: string, message: string, public fields?: FieldError[]) {
    super(message);
    this.name = 'AppError';
  }
}
export interface FieldError { field: string; message: string }

export type DocStatus = 'rascunho' | 'emitido' | 'cancelado';

export interface ServiceInfo { id: string; name: string; orgName: string; isDemo: boolean; active: boolean }

export interface Institution {
  serviceId: string; orgName: string; serviceName: string; city: string;
  address: string; phone: string; email: string; headerText: string; footerText: string; extraInfo: string;
  logoHash: string | null; fontFamily: string; fontSizePt: number;
}
export type InstitutionPatch = Partial<Omit<Institution, 'serviceId' | 'logoHash'>>;

export interface TemplateInfo {
  id: string; serviceId: string; kind: string; category: string; name: string;
  requiredFields: string[]; signatureSlots: number; closingText: string; enabled: boolean;
}

export interface NumberingRule { serviceId: string; category: string; labelFormat: string; padding: number; resetYearly: boolean }

export interface Signer {
  id: number; serviceId: string; fullName: string; roleTitle: string;
  active: boolean; hidden: boolean; hasSignatureImage: boolean; templateIds: string[];
}
export interface SignerInput { serviceId: string; fullName: string; roleTitle: string; templateIds?: string[] }

export interface SignerPick { signerId: number; useImage?: boolean }
export interface DocumentInput {
  serviceId: string; templateId: string; recipient: string; recipientRole: string;
  subject: string; body: string; city: string; issueDate: string; signers: SignerPick[];
}

export interface SignerSnapshot { signerId: number; name: string; role: string; imageHash: string | null }
export interface InstitutionSnapshot {
  orgName: string; serviceName: string; address: string; phone: string; email: string;
  headerText: string; footerText: string; extraInfo: string; logoHash: string | null;
  fontFamily: string; fontSizePt: number;
}

export interface DocumentRecord {
  id: number; serviceId: string; templateId: string; templateName: string; category: string;
  seqNumber: number | null; period: string | null; numberLabel: string | null; status: DocStatus;
  recipient: string; recipientRole: string; subject: string; body: string; city: string; issueDate: string;
  closingText: string; signers: SignerSnapshot[]; institution: InstitutionSnapshot;
  docxPath: string | null; pdfPath: string | null; createdAt: string; issuedAt: string | null;
  cancelledAt: string | null; cancelReason: string | null;
}

export interface SearchFilters {
  number?: string; recipient?: string; subject?: string; templateId?: string; status?: DocStatus;
  from?: string; to?: string; limit?: number; offset?: number;
}
export interface SequenceRow { seqNumber: number; numberLabel: string; status: DocStatus; documentId: number | null; issueDate: string | null }
export interface Stats { total: number; emitido: number; cancelado: number; rascunho: number; lastIssued: string | null }

export const MONTHS_PT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

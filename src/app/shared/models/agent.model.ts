import { Sale } from './sale.model';
export interface Agent {
    agentId: number;
    code: string;
    name: string;
    dateFrom: string;
    dateTo: string;
    remark: string;
    sales: Sale[];
}

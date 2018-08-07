import { Agent } from './agent.model';
import { SaleTypeVM } from './sale-type-vm.model';
export interface AgentVM {
    agent: Agent;
    saleTypeVM: SaleTypeVM[];
}

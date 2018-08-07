export interface SaleTypeVM {
    saleId: number;
    agentName?: any;
    baseCommission: number;
    target: number;
    targetPeriod: number;
    increaseIfTargetMet: number;
    maximum: number;
    restToBase: number;
    applicableTargetInrease: string;
    saleTypeId: number;
    saleTypeName: string;
    agentId: number;
}

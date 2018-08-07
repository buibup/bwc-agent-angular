export interface Sale {
    baseCommission: number;
    target: number;
    targetPeriod: number;
    increaseIfTargetMet: number;
    maximum: number;
    restToBase: number;
    applicableTargetInrease: string;
    saleTypeId: number;
    agentId: number;
}

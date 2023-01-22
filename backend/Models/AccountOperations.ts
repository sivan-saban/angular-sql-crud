class AccountOperations{
    objectId?:number=0;
    accountNumber?:number=0;
    types?:number=0;
    sum?:number=0;
    date?:Date=new Date();
    interest?:number=0;//ריבית
    sum_payments?: number=0;
}

export default AccountOperations;
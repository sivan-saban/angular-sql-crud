import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import AccountOperations from "../Models/AccountOperations";
import Types from "../Models/Types";

const getActionsByAccount = async (account:number): Promise<AccountOperations[]> => {
    const sql = `
    SELECT accountoperations.* , types.types AS types
        FROM accountoperations JOIN types
        ON accountoperations.types = types.id
        WHERE accountoperations.accountNumber=${account}
    `;
    const actions = await dal.execute(sql);
    return actions;
}

//add a new action
const addAction = async (action: AccountOperations): Promise<AccountOperations> => {
    const sql = `INSERT INTO  accountoperations (accountNumber, types, sum, date, interest, sum_payments) 
    VALUES (
            ${action.accountNumber},
            ${action.types},
            ${action.sum},
            '${action.date}',
            ${action.interest},
            ${action.sum_payments}
            )`;
console.log(sql)
    const response : OkPacket = await dal.execute(sql);
    action.objectId = response.insertId;
    return action;
} 

const getAllTypes = async (): Promise<Types[]> => {
    const sql = "SELECT * FROM types";
    const types = await dal.execute(sql);
    return types;
}

export default{
    addAction,
    getAllTypes,
    getActionsByAccount
}


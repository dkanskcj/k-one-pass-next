export interface ReceiptDTO {
    header: Header;
    body: ReceiptBodyDTO;
}

export interface ReceiptBodyDTO {
    ResultCode: number;
    ResultMsg: string;
}

export interface Header {
    IsSuccessful: boolean;
    ResultCode: number;
    ResultMsg: string;
    pageNum: number;
    pageSize: number;
    totalCount: number;
}

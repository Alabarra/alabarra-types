
export const ABFunctionEncodeOID = (bid: string, oid: string) => {
    const encodedBid = encodeURIComponent(bid);
    const encodedOid = encodeURIComponent(oid);

    const searchParams = new URLSearchParams(`bid=${encodedBid}&oid=${encodedOid}`);
    return searchParams.toString();
}

export const ABFunctioNDecodeOID = (encodedString: string) => {
    const searchParams = new URLSearchParams(encodedString);

    if (!searchParams.has("bid")) {
        throw new Error ("bid not found");
    }
    if (!searchParams.has("oid")) {
        throw new Error ("oid not found");
    }

    const bid = decodeURIComponent(searchParams.get("bid") ?? "");
    const oid = decodeURIComponent(searchParams.get("oid") ?? "");
    return {bid:  bid, oid: oid};
}

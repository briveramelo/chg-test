const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = "0";
    const MAX_PARTITION_KEY_LENGTH = 256;

    if(!event) {
        return TRIVIAL_PARTITION_KEY;
    }

    let eventKey = event.partitionKey;
    if (!eventKey) {
        const data = JSON.stringify(event);
        return crypto.createHash("sha3-512").update(data).digest("hex");
    }

    let candidate = typeof eventKey === "string" ? eventKey : JSON.stringify(eventKey);
    return candidate.length <= MAX_PARTITION_KEY_LENGTH ?
        candidate :
        crypto.createHash("sha3-512").update(candidate).digest("hex");
};

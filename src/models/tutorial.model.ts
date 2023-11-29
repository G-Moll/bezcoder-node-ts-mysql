import { RowDataPacket } from 'mysql2';

interface Tutorial extends RowDataPacket {
    id?: number,
    title?: string,
    description?: string,
    published?: boolean
}

export default Tutorial;

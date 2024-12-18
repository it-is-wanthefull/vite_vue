import axios from 'axios';
import { Notice } from '../api'

export const noticeDetailDeleteApi = async (detailValue, idx, fileData) => {
    await axios.post(Notice.DeleteNoticeDetail, {noticeSeq : idx});
};
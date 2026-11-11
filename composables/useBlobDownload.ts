/**
 * 下載後端以串流回應的 PDF
 * 後端若拋出業務例外會回傳 JSON 而不是 PDF,此時顯示 msg 並回傳 false
 */
export const useBlobDownload = () => {
    const downloadPdf = async (url: string, filename: string, failMsg: string, params?: Record<string, any>) => {
        try {
            const blob = await CSRrequest.get<Blob>(url, { responseType: 'blob', params });

            if (blob.type.includes('application/json')) {
                const res = JSON.parse(await blob.text());
                ElNotification.error(res.msg || failMsg);
                return false;
            }
            if (blob.size === 0) {
                ElNotification.error(failMsg);
                return false;
            }

            const objectUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = objectUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(objectUrl);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    return { downloadPdf };
};

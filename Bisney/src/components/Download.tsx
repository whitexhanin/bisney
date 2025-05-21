const FileDownload = () => { 
    const [progress, setProgress] = useState(0); 
    const [isDownloading, setIsDownloading] = useState(false); 
    const downloadFile = () => { 
        const url = 'your_download_url'; 
        setIsDownloading(true); 
        fetch(url) 
        .then(response => { 
            const total = response.headers.get('content-length'); 
            let loaded = 0; 
            const reader = response.body.getReader(); 
            const stream = new ReadableStream({ 
                start(controller) { 
                    function push() { 
                        reader.read()
                        .then(({ done, value }) => { 
                            if (done) { 
                                controller.close(); 
                                setIsDownloading(false); 
                                return; 
                            }
                                 loaded += value.byteLength; 
                                 setProgress((loaded / total) * 100); 
                                 controller.enqueue(value); 
                                 push(); 
                                }); } push(); } }); return new Response(stream); }) .then(response => response.blob()) .then(blob => { const link = document.createElement('a'); link.href = window.URL.createObjectURL(blob); link.download = 'your_filename'; link.click(); window.URL.revokeObjectURL(link.href); }) .catch(error => { console.error('Download failed:', error); setIsDownloading(false); }); }; return ( <div> <button onClick={downloadFile} disabled={isDownloading}> {isDownloading ? '다운로드 중...' : '다운로드 시작'} </button> {isDownloading && ( <div> <progress value={progress} max="100"></progress> <span>{Math.round(progress)}%</span> </div> )} </div> ); }; export default FileDownload
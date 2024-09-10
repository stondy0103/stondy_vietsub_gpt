// pages/api/openapi.js
export default function handler(req, res) {
    // JSON chứa định nghĩa OpenAPI
    const customJs = `
    (function() {

            const questionsAndAnswers = [
            {
                "question": "Theo Anh/Chị, bước công việc đầu tiên trong quy trình giám sát, theo dõi hoạt động phần mềm là gì?",
                "answer": "Kiểm tra, giám sát các thành phần vật lý"
            },
            {
                "question": "Trong quy trình giám sát, theo dõi hoạt động phần mềm; ở giai đoạn kiểm tra lưu trữ dữ liệu, nhân viên phần mềm sẽ thực hiện các nội dung nào sau đây?",
                "answer": "B, C đúng"
            },
            {
                "question": "Trong quy trình giám sát, theo dõi hoạt động phần mềm; việc kiểm tra đường truyền thuộc bước công việc nào sau đây?",
                "answer": "Kiểm tra, giám sát các thành phần vật lý"
            },
            {
                "question": "Trong quy trình giám sát, theo dõi hoạt động phần mềm; các thành phần vật lý được kiểm tra, giám sát bao gồm:",
                "answer": "Cả A, B, C"
            },
            {
                "question": "Tại sao bước Sao lưu và phục hồi quan trọng trong quản lý dữ liệu?",
                "answer": "Các bản sao lưu đảm bảo cấu trúc dữ liệu khi có sự cố phát sinh hoặc mở rộng chương trình sang server mới."
            },
            {
                "question": "Trong quy trình tiếp nhận phân tích quy trình nghiệp vụ; việc \\"Thống nhất những mâu thuẫn trong dự án có thể bắt đầu dự án với những chia sẻ về hiểu biết mục tiêu nghiệp vụ\\" thuộc bước công việc nào của quy trình?",
                "answer": "Xem xét lại các nghiệp vụ chính"
            },
            {
                "question": "Trong quy trình tiếp nhận phân tích quy trình nghiệp vụ; nội dung nào dưới đây KHÔNG thuộc quá trinh lập kế hoạch phân tích nghiệp vụ?",
                "answer": "Xác định các bên liên quan chính để tham gia xác định các mục tiêu và phạm vi nghiệp vụ của dự án"
            },
            {
                "question": "Trong quy trình tiếp nhận phân tích quy trình nghiệp vụ; \\"Định hướng chương trình\\" là nhân viên IT sẽ thực hiện những nội dung công việc nào sau đây?",
                "answer": "B, C đúng"
            },
            {
                "question": "Anh/Chị hãy sắp xếp các nội dung sau theo trình tự đặc tả yêu cầu phần mềm \\n1. Xác định các khó khăn \\n2. Xác định nhân sự phát triển \\n3. Xác định các quy trình nghiệp vụ \\n4. Xác định môi trường hoạt động \\n5. Xác định mục tiêu",
                "answer": "5 - 4 - 3 - 2 - 1"
            },
            {
                "question": "Trong quy trình đặc tả yêu cầu phần mềm; việc \\"Phân tích và vẽ sơ đồ các quy trình nghiệp vụ\\" thuộc bước công việc nào sau đây?",
                "answer": "Xác định các quy trình nghiệp vụ"
            },
            {
                "question": "Trong quy trình đặc tả yêu cầu phần mềm; việc xác định mức độ ưu tiên trong quá trình đặc tả yêu cầu phần mềm thuộc bước công việc nào say đây?",
                "answer": "Xác định mục tiêu"
            },
            {
                "question": "Trong quy trình đặc tả yêu cầu phần mềm; nội dung nào dưới đây KHÔNG thuộc trách nhiệm của nhân viên phần mềm?",
                "answer": "Rà soát, kiểm tra các đặc tả yêu cầu phần mềm"
            },
            {
                "question": "Anh/Chị hãy sắp xếp các nội dung sau theo trình tự thực thi quy trình phân tích yêu cầu người dùng và thiết kế giao diện \\n1. Đánh giá giao diện \\n2. Xác định môi trường hoạt động \\n3. Phân tích hành vi người dùng \\n4. Kiểm tra, rà soát các phân tích yêu cầu \\n5. Lập mẫu thử hệ thống \\n6. Xác định nhân lực phát triển \\n7. Xác định các khó khăn",
                "answer": "3 - 2 - 5 - 1 - 6 - 7 - 4"
            },
            {
                "question": "Trong quy trình phân tích yêu cầu người dùng và thiết kế giao diện; Lập trình trực quan là:",
                "answer": "Kỹ thuật lập mẫu thử"
            },
            {
                "question": "Trong quy trình phân tích yêu cầu người dùng và thiết kế giao diện; ở giai đoạn phân tích hành vi của người sử dụng, nhân viên phần mềm thường sử dụng dạng câu hỏi đóng trong quá trình phỏng vấn. Đúng hay sai?",
                "answer": "Sai"
            },
            {
                "question": "Trong quy trình phân tích yêu cầu người dùng và thiết kế giao diện; việc trắc nghiệm phản hồi của người sử dụng trong quá trình Phân tích yêu cầu người dùng và thiết kế giao diện thuộc bước nào?",
                "answer": "Đánh giá giao diện người dùng"
            },
            {
                "question": "Trong quy trình phân tích yêu cầu người dùng và thiết kế giao diện; phân tích nhiệm vụ là gì?",
                "answer": "Mô hình hóa các bước cần thực hiện để hoàn thành một nhiệm vụ"
            },
            {
                "question": "Trong quy trình phân tích yêu cầu người dùng và thiết kế giao diện; nhân viên phần mềm sử dụng công cụ Visual Basic khi áp dụng kỹ thuật lấy mẫu thử hệ thống nào?",
                "answer": "Kỹ thuật lấy mẫu thử lập trình trực quan"
            },
            {
                "question": "Anh/Chị hãy sắp xếp các nội dung sau theo trình tự thực thi quy trình cải đặt môi trường và công cụ lập trình\\n1. Cài đặt HQTCSDL \\n2. Cài đặt IDE lập trình \\n3. Kiểm tra hoạt động \\n4. Cài đặt và cấu hình môi trường Java \\n5. Xác định thiết bị cài đặt",
                "answer": "5 - 4 - 2 - 1 - 3"
            },
            {
                "question": "Trong quy trình cải đặt môi trường và công cụ lập trình; ở giai đoạn cài đặt HQTCSDL, nhân viên phần mềm sẽ cài đặt cái gì?",
                "answer": "MySQL"
            },
            {
                "question": "Trong quy trình cài đặt môi trường và công cụ lập trình; việc cài đặt JRE, JDK sẽ được thực hiện tại bước công việc nào sau đây?",
                "answer": "Cài đặt và cấu hình môi trường Java"
            },
            {
                "question": "Trong quy trình cải đặt môi trường và công cụ lập trình; ở giai đoạn kiểm tra hoạt động, nhân viên phần mềm sẽ thực hiện những nội dung nào sau đây?",
                "answer": "B, C đúng"
            },
            {
                "question": "Trong quy trình \\"Tiếp nhận phân tích quy trình nghiệp vụ\\", bước công việc đầu tiên cần thực hiện là:",
                "answer": "Định hướng chương trình"
            },
            {
                "question": "Trong quy trình \\"Tiếp nhận phân tích quy trình nghiệp vụ\\", mục đích của việc \\"Xác định phạm vi dự án\\" là để:",
                "answer": "Xác định giải pháp tiếp cận để xác định tính chất và phạm vi công nghệ."
            },
            {
                "question": "Trong quy trình \\"Tiếp nhận phân tích quy trình nghiệp vụ\\", \\"Kế hoạch phân tích nghiệp vụ\\" xác định nội dung nào?",
                "answer": "Thời hạn hoàn thành phân tích nghiệp vụ"
            },
            {
                "question": "Trong quy trình \\"Đặc tả yêu cầu phần mềm\\", bước công việc \\"xác định mục tiêu của chương trình\\" nhằm để:",
                "answer": "Xác định tính khả thi và lợi ích khi tạo ra chương trình"
            },
            {
                "question": "Trong quy trình \\"Đặc tả yêu cầu phần mềm\\", khó khăn có thể gặp phải là:",
                "answer": "Khả năng tương thích với dữ liệu cũ và các chương trình hiện có"
            },
            {
                "question": "Trong hướng dẫn phân tích và vẽ các quy trình nghiệp vụ; đối với biểu đồ Use case, các Use Case được miêu tả duy nhất theo hướng nhìn từ trong ra của các tác nhân (hành vi của hệ thống theo như sự mong đợi của người dùng), đồng thời miêu tả chức năng được cung cấp sẽ hoạt động nội bộ bên trong hệ thống ra sao. Đúng hay sai?",
                "answer": "Sai"
            },
            {
                "question": "Trong hướng dẫn phân tích và vẽ các quy trình nghiệp vụ; đối với biểu đồ Use case, các Use Case được ký hiệu bằng hình gì?",
                "answer": "Hình Elips"
            },
            {
                "question": "Trong hướng dẫn phân tích và vẽ các quy trình nghiệp vụ; đối với biểu đồ Use case, \\"Association\\" thường dùng để mô tả mối quan hệ nào sau đây?",
                "answer": "Mối quan hệ giữa các Actor và Use Case và giữa các Use case với nhau"
            },
            {
                "question": "Trong quy trình phân tích yêu cầu người dùng và thiết kế giao diện, công cụ nào có thể sử dụng khi áp dụng kỹ thuật mẫu thử hướng nguyên mẫu?",
                "answer": "Macromedia Director"
            },
            {
                "question": "Trong quy trình phân tích yêu cầu người dùng và thiết kế giao diện, nội dung nào sau đây được thực hiện để \\"đánh giá giao diện người dùng\\"?",
                "answer": "Ghi lại quá trình sử dụng mẫu thử của hệ thống và đánh giá nó"
            }
        ]
    
        // Hàm để phát hiện sự thay đổi trong lựa chọn văn bản
        document.addEventListener('mouseup', function() {
            // Lấy đoạn văn bản mà người dùng đã bôi đen
            const selectedText = window.getSelection().toString().trim();
    
            if (selectedText.length > 0) {
                // Kiểm tra nếu đoạn văn bản bôi đen trùng khớp với câu hỏi trong danh sách
                const foundQA = questionsAndAnswers.find(qa => selectedText.includes(qa.question));
    
                if (foundQA) {
                    // Lấy vị trí của đoạn văn bản được bôi đen
                    const selection = window.getSelection();
                    const range = selection.getRangeAt(0);
                    const endNode = range.endContainer;
    
                    // Tạo một span chứa đáp án đúng
                    const answerSpan = document.createElement('span');
                    answerSpan.className = 'correct-answer';
                    answerSpan.innerText = foundQA.answer + '\\n';
                    answerSpan.style.color = 'white';
                    answerSpan.style.fontWeight = 'bold';
                    answerSpan.style.marginLeft = '10px';
    
                    // Chèn câu trả lời ngay sau đoạn văn bản được bôi đen
                    if (endNode.nodeType === Node.TEXT_NODE) {
                        range.insertNode(answerSpan);
                    }
    
                    // Bỏ chọn văn bản để tránh các vấn đề hiển thị tiếp theo
                    window.getSelection().removeAllRanges();
                }
            }
        });
    })();
    `

    // Trả về JSON OpenAPI
    res.status(200).json({script: customJs});
}

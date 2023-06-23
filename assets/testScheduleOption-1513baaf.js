const g=0,u=1,a=2,v=3,l=0,r=1,m=new Map([[0,"Vocabulary & Grammar"],[1,"Listening"],[2,"Reading"],[3,"Writing"],[4,"Speaking"]]),o=new Map([[0,"fa-solid fa-user"],[1,"fa-sharp fa-solid fa-volume-high"],[2,"fa-solid fa-book"],[3,"fa-solid fa-pen"],[4,"fa-sharp fa-solid fa-message"]]),n=0,c=1,h=2,t=3,i=4,s=new Map([["fluency_and_coherence","Độ trôi chảy và mạch lạc"],["lexical_resource","Vốn từ"],["grammatical_range_accuracy","Độ đa dạng và chính xác của ngữ pháp"],["pronunciation","Phát âm"],["task_achievement_writing","Đáp ứng yêu cầu đề bài"],["lexical_resource_writing","Ngữ pháp"],["grammatical_range_accuracy_writing","Từ vựng"],["coherence_cohesion_writing","Độ mạch lạc"]]),p={0:"• Học viên không tham gia Test ",1:`"• Học viên chưa thể giao tiếp và truyền đạt được ý tưởng
• Ngôn ngữ chưa thể đánh giá được"`,2:`"• Khi trình bày, có các khoảng dừng dài trước hầu hết các từ
• Khả năng truyền đạt ý tưởng cần cải thiện thêm "`,3:`"• Khi học viên trình bày còn có những khoảng dừng dài
• Khả năng liên kết các câu đơn còn hạn chế
• Chỉ đưa ra được những câu trả lời đơn giản và thường không truyền tải được thông điệp cơ bản"`,4:`"• Trong lúc trả lời vẫn có những khoảng dừng đáng chú ý, tốc độ nói của học viên khá chậm, thường xuyên bị lặp và tự sửa lỗi
• Học viên có thể liên kết được các câu cơ bản nhưng còn sử dụng lặp đi lặp lại các phép liên kết đơn giản, tính mạch lạc vẫn còn bị gián đoạn. "`,5:`"• Học viên thường xuyên duy trì được độ trôi chảy của lời nói nhưng phải lặp lại, tự sửa lỗi và nói chậm để có thể nói liên tục
• Học viên có thể lạm dụng (sử dụng quá mức) một số từ nối, phép nối và discourse markers*
• Tạo ra được những lời nói đơn giản và lưu loát, nhưng việc truyền đạt bị phức tạp hơn nên gây ra các vấn đề về độ trôi chảy"`,6:`"• Học viên có thể mở rộng câu trả lời, mặc dù đôi khi có thể mất độ mạch lạc do thỉnh thoảng lặp lại, tự sửa lỗi hoặc do ngập ngừng
• Sử dụng nhiều các phép nối và discourse markers nhưng không phải lúc nào cũng thích hợp"`,7:`"• Học viên có thể mở rộng, kéo dài câu nói mà không cần nỗ lực nhiều hoặc mất tính mạch lạc
• Đôi khi có thể thể hiện sự ngập ngừng liên quan đến ngôn ngữ hoặc một số sự lặp lại và / hoặc tự điều chỉnh, sửa lỗi
• Sử dụng nhiều, đa dạng và linh hoạt các phép nối nối cũng như discourse markers"`,8:`"        
• Học viên duy trì bài nói một cách trôi chảy, chỉ thỉnh thoảng lặp từ hoặc tự sửa lỗi hay ngập ngừng do tìm nội dung, ý diễn đạt chứ hiếm khi phải dừng để tìm từ ngữ
• Phát triển các chủ đề một cách mạch lạc và phù hợp"`,9:`"• Học viên duy trì bài nói một cách trôi chảy và hiếm khi lặp lại hay tự điều chỉnh, sửa lỗi
• Mọi sự do dự, ngập ngừng trong lúc nói đều liên quan đến nội dung hơn là tìm từ hoặc ngữ pháp
• Nói mạch lạc sử dụng các đặc trưng liên kết một cách hoàn toàn thích hợp
• Phát triển các chủ đề một cách đầy đủ và hợp lý"`},d={0:"• Học viên không tham gia Test ",1:"• Học viên chưa thể giao tiếp và truyền đạt được ý tưởng",2:"•  Học viên chỉ nói được những từ đơn, riêng biệt hoặc những câu nói được ghi nhớ",3:`"• Chỉ sử dụng được những từ vựng đơn giản để truyền đạt thông tin cá nhân
•  Thiếu vốn từ để diễn đạt nhưng chủ đề ít quen thuộc hơn"`,4:`"•  Có thể nói về các chủ đề quen thuộc. Tuy nhiên chỉ có thể truyền đạt ý nghĩa cơ bản về các chủ đề không quen thuộc và thường xuyên mắc lỗi trong việc lựa chọn từ ngữ
• Hiếm khi cố gắng thay đổi cách diễn đạt (paraphrase)"`,5:`"• Có thể nói được về cả các chủ đề quen thuộc và không quen thuộc nhưng sử dụng từ vựng còn ít linh hoạt
• Có cố gắng sử dụng nhiều cách để diễn đạt nhưng thường không thành công"`,6:`"• Có vốn từ vựng đủ rộng để có những cuộc thảo luận dài về nhiều chủ đề và làm cho ý nghĩa rõ ràng mặc dù còn những chỗ không phù hợp
• Nhìn chung diễn đạt ý được bằng nhiều cách chính xác"`,7:`"• Sử dụng nguồn từ vựng một cách linh hoạt để thảo luận về nhiều chủ đề khác nhau
• Sử dụng được một số thành ngữ và các từ vựng ít phổ biến hơn, đồng thời cho thấy một số kiến thức về văn phong và cụm từ, tuy nhiên các sự lựa chọn chưa được phù hợp
• Sử dụng hiệu quả nhiều cách diễn đạt (paraphrase) khác nhau"`,8:`"• Sử dụng nguồn từ vựng phong phú và linh hoạt để truyền đạt ý nghĩa một cách chính xác
• Sử dụng các từ vựng ít phổ biến và thành ngữ một cách khéo léo, chỉ đôi khi không chính xác
• Sử dụng nhiều cách diễn đạt hiệu quả như được yêu cầu"`,9:`"• Sử dụng từ vựng một cách linh hoạt và chính xác trong tất cả các chủ đề
• Sử dụng các thành ngữ một cách tự nhiên và chính xác"`},y={0:"• Học viên không tham gia Test ",1:"• Không có sự giao tiếp",2:"• Không thể hình thành các dạng câu cơ bản",3:`"• Cố gắng sử dụng các dạng câu cơ bản nhưng ít khi thành công hoặc dựa vào các câu nói có vẻ đã thuộc lòng
• Mắc nhiều lỗi ngoại trừ các cách diễn đạt đã được ghi nhớ"`,4:`"        • Hình thành được các dạng câu cơ bản và một số câu đơn giản đúng nhưng hiếm khi sử dụng các dạng cấu trúc câu phức
• Thường xuyên mắc lỗi và các lỗi có thể dẫn đến sự khó hiểu hoặc hiểu nhầm"`,5:`"• Sử dụng các dạng câu cơ bản một cách hợp lý và chính xác
• Có sử dụng một số ít các cấu trúc phức tạp hơn, nhưng những cấu trúc này thường có lỗi và có thể gây ra một số vấn đề về việc hiểu"`,6:`"• Sử dụng kết hợp các cấu trúc đơn giản và phức tạp nhưng ít linh hoạt
• Có thể vẫn mắc lỗi thường xuyên với các cấu trúc phức tạp nhưng những lỗi này hiếm khi gây ra các vấn đề về hiểu"`,7:`"• Sử dụng nhiều cấu trúc phức tạp một cách khá linh hoạt
• Các câu được tạo ra thường là không có lỗi, hoặc chỉ tồn tại một số lỗi ngữ pháp"`,8:`"• Sử dụng nhiều và đa dạng các loại cấu trúc một cách linh hoạt
• Phần lớn các câu không có lỗi, chỉ thỉnh thoảng không phù hợp hoặc mắc các lỗi cơ bản/ lỗi không hệ thống"`,9:`"        • Sử dụng đầy đủ các cấu trúc một cách tự nhiên và thích hợp
• Cấu trúc các câu chính xác và nhất quán, loại trừ các “lỗi nhỏ”’ trong đặc điểm cách nói của người bản ngữ"`},k={1:"• Học viên không tham gia Test ",2:'"        • Không có sự giao tiếp"',3:"• Lời nói thường không thể hiểu được",4:"• Thể hiện một số đặc điểm của Band 2 và một số, nhưng không phải tất cả các tính năng tích cực của Band 4",5:"• Thể hiện được tất cả các tính năng tích cực của Band 4 và một số, nhưng không phải tất cả các tính năng tích cực của Band 6",6:`"• Sử dụng được một số các thành tố phát âm nhưng việc kiểm soát còn lẫn lộn
• Cho thấy khả năng sử dụng hiệu quả một số thành tố nhưng điều này không được duy trì
• Nhìn chung bài nói có thể được hiểu xuyên suốt, mặc dù việc phát âm sai các từ hoặc âm đôi khi làm giảm độ rõ ràng"`,7:"• Thể hiện tất cả các tính năng tích cực của Band 6 và một số, nhưng không phải tất cả các tính năng tích cực của Band 8",8:`"        • Sử dụng nhiều và đa dạng các thành tố phát âm
• Duy trì được việc sử dụng linh hoạt các thành tố này, chỉ thỉnh thoảng mắc lỗi
• Xuyên suốt bài nói dễ hiểu; giọng ngôn ngữ thứ nhất (tiếng Việt) ảnh hưởng rất ít đến khả năng hiểu"`,9:`"       • Sử dụng đầy đủ các thành tố phát âm với độ chính xác và sự tinh tế
• Duy trì việc sử dụng linh hoạt các thành tố này xuyên suốt bài nói
• Có thể dễ dàng hiểu mà không cần nỗ lực"`},b={1:"• Bài viết hoàn toàn không liên quan đến đề bài",2:`• Bài viết hầu như không đáp ứng được yêu cầu đề bài 
• Bài viết chưa bày tỏ được quan điểm
• Có thể cố gắng trình bày một hoặc hai ý tưởng nhưng chưa có sự phát triển ý `,3:`• Bài viết chưa đáp ứng được yêu cầu của đề bài 
• Chưa bày tỏ quan điểm một cách rõ ràng
• Trình bày được một số ý tưởng, phần lớn chưa được phát triển hoặc không liên quan tới đề bài`,4:`"• Bài viết chỉ đáp ứng một phần rất nhỏ yêu cầu đề bài  hoặc câu trả lời là tiếp tuyến; cấu trúc bài có thể chưa phù hợp
• Đã có trình bày một quan điểm nhưng chưa thật sự rõ ràng
• Trình bày một số ý chính nhưng khó xác định và có thể lặp lại ý, không liên quan hoặc các supporting ideas chưa tốt. "`,5:`"• Bài viết chỉ đáp ứng một phần yêu cầu đề bài; cấu trúc có thể không phù hợp ở một số phần
• Bài viết đã thể hiện được quan điểm nhưng một số ý còn chưa rõ ràng và có thể không rút ra được kết luận cụ thể nào
• Trình bày được một số ý chính nhưng còn hạn chế và chưa phát triển đầy đủ; có thể có một vài chi tiết không liên quan"`,6:`"• Bài viết đáp ứng được tất cả các yêu cầu của đề bài mặc dù các phần chưa được bao quát tương đương nhau 
• Trình bày quan điểm có liên quan mặc dù kết luận có thể trở chưa rõ ràng hoặc lặp đi lặp lại
• Trình bày những ý chính có liên quan nhưng một số ý có thể chưa được phát triển đầy đủ/không rõ ràng"`,7:`"• Bài viết đáp ứng được tất cả yêu cầu của đề bài 
• Trình bày quan điểm rõ ràng trong suốt bài làm
• Trình bày, mở rộng và hỗ trợ tốt cho các ý chính, nhưng có thể có xu hướng khái quát hóa quá mức và/hoặc các supporting ideas còn lan man, thiếu trọng tâm"`,8:`"• Bài viết đáp ứng được tất cả yêu cầu của đề bài 
• Trình bày bài làm được phát triển tốt cho câu hỏi với các ý tưởng có liên quan, mở rộng và các supporting ideas tốt"`,9:`"• Bài viết đáp ứng được tất cả yêu cầu của đề bài 
• Trình bày bài làm rất tốt, phát triển đầy đủ ý để trả lời cho yêu cầu với các ý tưởng phù hợp, mở rộng đầy đủ và các supporting ideas tốt"`},e={1:"•Bài viết chỉ có thể sử dụng một vài từ riêng lẻ",2:"• Sử dụng một lượng từ vựng hạn chế; về cơ bản không kiểm soát được các lỗi sai về cấu tạo từ và/hoặc chính tả ",3:`"• Chỉ sử dụng một số lượng từ và cách diễn đạt còn hạn chế với khả năng kiểm soát các lỗi sai về cấu tạo từ và/hoặc chính tả rất hạn chế 
• Các lỗi trong bài có thể làm sai nghĩa các ý "`,4:`"• Chỉ sử dụng từ vựng cơ bản,  có thể các từ được sử dụng lặp đi lặp lại hoặc có thể sử dụng từ không phù hợp.
• Kiểm soát các lỗi sai về cấu tạo từ và/hoặc chính tả chưa tốt; lỗi có thể gây ra hiểu lầm cho người đọc"`,5:`"• Sử dụng một lượng từ vựng hạn chế, nhưng điều này tối thiểu phù hợp với yêu cầu đề bài 
• Bài viết mắc lỗi đáng chú ý về chính tả và/hoặc cấu tạo từ, có thể gây khó khăn cho người đọc"`,6:`"• Bài viết sử dụng lượng từ vựng phù hợp theo yêu cầu đề bài
• Học viên đã cố gắng sử dụng từ vựng ít phổ biến hơn nhưng có một số chỗ, cách sử dụng từ chưa phù hợp 
• Mắc một số lỗi chính tả và/hoặc cấu tạo từ, nhưng không làm sai nghĩa "`,7:`"• Bài viết sử dụng lượng từ vựng phù hợp, linh động, chính xác theo yêu cầu đề bài
• Sử dụng các từ vựng ít phổ biến hơn, có biết về Collocation và Style. 
• Thỉnh thoảng có thể mắc lỗi trong việc lựa chọn từ, chính tả và/hoặc cấu tạo từ"`,8:`"• Sử dụng nhiều loại từ vựng một cách trôi chảy và linh hoạt để truyền đạt ý nghĩa chính xác
• khéo léo sử dụng các mục từ vựng không phổ biến. Tuy nhiên,  việc lựa chọn từ và sắp xếp thứ tự còn chưa chính xác. 
• Mắc các lỗi hiếm gặp về chính tả và/hoặc cấu tạo từ"`,9:"• Bài viết sử dụng nhiều loại từ vựng với khả năng kiểm soát các đặc điểm của từ vựng rất tự nhiên và tinh vi; các lỗi nhỏ hiếm gặp chỉ xảy ra dưới dạng 'nhầm lẫn'"},C={1:"• Bài viết không thể sử dụng các mẫu câu ngoại trừ trong các cụm từ được ghi nhớ",2:"• Học viên đã cố gắng đặt câu nhưng bài viết còn tồn tại nhiều lỗi ngữ pháp và dấu câu chiếm và làm sai lệch ý nghĩa",3:`"• Bài viết chỉ sử dụng một phạm vi cấu trúc rất hạn chế và hiếm khi sử dụng các mệnh đề phụ
• Một số cấu trúc chính xác nhưng đa số vẫn mắc lỗi và dấu câu thường không phù hợp"`,4:`"• Bài viết chỉ sử dụng một số cấu trúc hạn chế
• Cố gắng đặt những câu phức tạp nhưng những câu này có xu hướng kém chính xác hơn những câu đơn giản
• Có thể mắc lỗi ngữ pháp thường xuyên và dấu câu có thể bị lỗi; lỗi có thể gây ra một số khó khăn cho người đọc"`,5:"",6:`"• Bài viết sử dụng kết hợp các dạng câu đơn giản và phức tạp
• Mắc một số lỗi ngữ pháp và dấu câu nhưng hiếm khi làm ảnh hưởng tới ngữ nghĩa "`,7:`"• Bài viết sử dụng nhiều cấu trúc phức tạp
• Phần lớn các câu trong bài đều không mắc lỗi 
• Kiểm soát ngữ pháp và dấu câu tốt nhưng có thể mắc một vài lỗi"`,8:`"• Bài viết sử dụng đa dạng các cấu trúc câu 
• Đa số các câu trong bài đều không mắc lỗi 
• Mắc một số lỗi rất hiếm"`,9:"• Bài viết sử dụng đa dạng các cấu trúc với đầy đủ tính linh hoạt và chính xác; các lỗi nhỏ hiếm gặp chỉ xảy ra dưới dạng 'nhầm lẫn'"},T={1:"• Bài viết chưa truyền đạt được ý",2:"• Chưa kiểm soát được các tính năng của cấu trúc bài",3:`"• Chưa trình bày được ideas một cách logic
• Học viên có thể sử dụng một số lượng rất hạn chế các Từ nối. Tuy nhiên các từ nối có thể chưa liên kết được mối quan hệ logic giữa các ideas."`,4:`"• Bài viết trình bày thông tin và ý tưởng nhưng chưa được sắp xếp một cách mạch lạc và chưa có sự tiến triển rõ ràng trong câu trả lời
• Sử dụng một số Từ nối cơ bản nhưng những từ nối này có thể không chính xác hoặc lặp đi lặp lại
• Có thể không viết thành đoạn văn hoặc chức năng đoạn có thể gây nhầm lẫn"`,5:`"• Bài viết trình bày thông tin với một số cách sắp xếp ý tưởng nhưng có thể thiếu diễn tiến tổng thể
• Các từ nối chưa đầy đủ, chưa chính xác hoặc lạm dụng. 
• Có thể lặp đi lặp lại vì thiếu tham chiếu và thay thế
• Có thể không viết thành đoạn văn, hoặc đoạn văn có thể không đầy đủ"`,6:`"• Bài viết sắp xếp thông tin và ý tưởng một cách mạch lạc và có một diễn tiến tổng thể rõ ràng
• Sử dụng các Từ nối một cách hiệu quả, nhưng sự liên kết bên trong và/hoặc giữa các câu có thể bị lỗi hoặc máy móc hoá
• Có thể không phải lúc nào cũng sử dụng tham chiếu một cách rõ ràng hoặc phù hợp
• Bài viết có phân đoạn, nhưng không phải lúc nào cũng hợp lý"`,7:`"• Bài viết sắp xếp thông tin và ý tưởng một cách hợp lý; có sự tiến bộ rõ ràng trong suốt bài 
• Sử dụng một loạt các từ nối một cách thích hợp mặc dù có thể có một số từ bị sử dụng dưới mức/quá mức
• Trình bày một ý chính, trọng tâm rõ ràng trong mỗi đoạn văn"`,8:`"• Bài viết trình bày các  thông tin và ý tưởng một cách hợp lý
• Có tính liên kết cao
• Phân đoạn đầy đủ và phù hợp"`,9:`"• Bài viết có tính liên kết cao, rất tự nhiên 
• Phân đoạn rất tốt, kĩ thuật tốt. "`},_=new Map([["vocabulary",n],["listening",c],["reading",h],["writing",t],["speaking",i]]);export{g as C,a as H,s as N,l as O,u as T,v as V,r as a,o as b,m as c,T as d,C as e,e as f,b as g,k as h,y as i,d as j,p as k,_ as l};

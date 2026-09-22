export interface Question {
  q: string;
  o: string[];
  a: number;
}

export interface AnalysisCategory {
  icon: string;
  title: string;
  count: number;
  color: string;
  rules: string[];
  tip: string;
}

export interface MasterPhase {
  time: string;
  title: string;
  color: string;
  content: { k: string; v: string }[];
}

export interface MasterData {
  mantra: string;
  phases: MasterPhase[];
}

export const allQuestions: Question[] = [
  {q:"Ý nghĩa của vạch kẻ liên tục màu đỏ trên vị trí đỗ?",o:["Sân đỗ và khu vực tập kết trang thiết bị phục vụ tàu bay","Đường lăn tàu bay và sân đỗ","Giới hạn an toàn vị trí đỗ","Giới hạn an toàn tàu bay lăn"],a:2},
  {q:"Ý nghĩa của vạch kẻ liên tục màu vàng trên sân đỗ?",o:["Tim đường lăn của tàu bay","Tim đường dành cho xe chở hành khách","Tim đường dành cho xe thang hành khách","Tim đường dành cho xe kéo đẩy tàu bay"],a:0},
  {q:"Tại khu vực ưu tiên của cầu hành khách các vạch kẻ thể hiện màu như thế nào để nhân viên nhận biết không được đứng hoặc đi lại khi thang ống tiếp cận hoặc rời khỏi tàu bay?",o:["Vạch kẻ xiên không liên tục màu đỏ","Vạch kẻ đôi, liên tục màu trắng","Vạch kẻ không liên tục màu trắng","Vạch kẻ xiên liên tục màu đỏ"],a:3},
  {q:"Trong phạm vi khu vực ưu tiên của thang ống các trang thiết bị nào hoặc ai được phép đậu hoặc đứng làm việc?",o:["Chỉ có nhân viên phục vụ chuyến bay đang đậu tại vị trí đỗ","Thợ máy và Phương tiện di chuyển","Không ai hoặc thiết bị nào","Xe thang và xe khởi động khí khi được cho phép"],a:2},
  {q:"Dấu hiệu nào sau đây cho biết cầu hành khách đang hoạt động, nhân viên không được đứng hoặc di chuyển trong khu vực giới hạn của cầu hành khách?",o:["Nhân viên sân đỗ làm hiệu hai cánh tay bắt chéo trên đầu","Nhân viên vận hành cầu hành khách làm hiệu hai cánh tay bắt chéo trên đầu","Đèn xoay di chuyển bật sáng","Khi di chuyển cầu hành khách, chuông báo động và đèn cảnh báo phải được bật"],a:3},
  {q:"Những ai được phép lên/xuống cầu thang bộ cầu khi cầu hành khách đang di chuyển?",o:["Cán bộ giám sát đội Vận hành cầu hành khách","Nhân viên điều phối phục vụ chuyến bay (COOR)","Nhân viên an ninh phụ trách kiểm soát an ninh tại vị trí cầu hành khách","Không ai được phép"],a:3},
  {q:"Khu vực giới hạn của cầu hành khách không cho phép trang thiết bị dừng chờ hoặc đỗ tại thời điểm nào?",o:["Toàn bộ thời gian sân bay hoạt động","Thời gian phục vụ chuyến bay đến","Thời gian phục vụ chuyến bay đi","Thời gian tàu bay đậu qua đêm"],a:0},
  {q:"Dấu hiệu cảnh báo nào để nhân viên nhận biết không được tiếp cận tàu bay?",o:["Dấu hiệu cảnh báo không được tiếp cận từ nhân viên đánh tín hiệu","Dấu hiệu cảnh báo không được tiếp cận từ thợ máy","Dấu hiệu cảnh báo động cơ còn hoạt động từ cơ trưởng","Đèn chống va chạm của tàu bay còn hoạt động"],a:3},
  {q:"Khoảng cách an toàn phía trước và sau động cơ tàu bay Code C khi động cơ hoạt động ở chế độ không tải là bao nhiêu mét?",o:["Phía trước 6 mét; phía sau 160 mét","Phía trước 60 mét; phía sau 6 mét","Phía trước 6 mét; phía sau 60 mét","Phía trước 16 mét; phía sau 60 mét"],a:2},
  {q:"Khoảng cách an toàn phía trước và sau động cơ tàu bay Code D, E, F khi động cơ hoạt động ở chế độ không tải là bao nhiêu mét?",o:["Phía trước 8 mét; phía sau 180 mét","Phía trước 80 mét; phía sau 8 mét","Phía trước 8 mét; phía sau 80 mét","Phía trước 18 mét; phía sau 80 mét"],a:2},
  {q:"Khoảng cách an toàn phía trước và sau động cơ tàu bay Code A, B khi động cơ hoạt động ở chế độ không tải là bao nhiêu mét?",o:["Phía trước 4 mét; phía sau 140 mét","Phía trước 40 mét; phía sau 4 mét","Phía trước 4 mét; phía sau 40 mét","Phía trước 18 mét; phía sau 80 mét"],a:2},
  {q:"Vùng nguy hiểm phía trước động cơ tàu bay đang hoạt động có thể dẫn đến nguy cơ gì?",o:["Thổi F.O.D, con người và phương tiện văng xa","Hút F.O.D vào động cơ tàu bay","Có khả năng gây phỏng cho con người","Gây hư hỏng thiết bị"],a:1},
  {q:"Vùng nguy hiểm phía sau động cơ tàu bay đang hoạt động có thể dẫn đến nguy cơ gì?",o:["Hút F.O.D vào động cơ tàu bay","Có khả năng gây phỏng cho con người","Gây hư hỏng tàu bay phía sau do luồng khí thổi","Thổi F.O.D, con người và phương tiện văng xa"],a:3},
  {q:"Khi tàu bay đang lăn vào vị trí đỗ, nhân viên mặt đất:",o:["Đứng ngoài khu vực giới hạn an toàn vị trí đỗ","Được đứng chờ trong khu vực ưu tiên của thang ống","Được phép đứng chờ để chèn bánh tại vạch dừng của tàu bay trong vị trí đỗ","Được tiếp cận khu vực giới hạn an toàn vị trí đỗ phía sau tàu bay"],a:0},
  {q:"Quy định an toàn sân đỗ, khi đang di chuyển qua giao lộ giữa đường lăn và đường công vụ, quan sát thấy có tàu bay lăn nhân viên mặt đất phải làm gì?",o:["Chạy vòng phía sau đuôi tàu bay","Dừng lại và nhường đường cho tàu bay lăn","Chạy nhanh qua tránh chặn đường tàu bay lăn","Tiếp tục đi cho đến khi nhân viên đánh tín hiệu ra dấu hiệu dừng lại"],a:1},
  {q:"Quy định cấm hút thuốc được áp dụng ở những vị trí nào (ngoại trừ phòng hút thuốc trong nhà ga)?",o:["Tất cả vị trí trong nhà ga và sân đỗ","Chỉ trong phạm vi sân đỗ","Khu vực tàu bay đỗ","Khu vực có xăng dầu"],a:0},
  {q:"Khi đang tra nạp nhiên liệu cho tàu bay, các phương tiện và thiết bị hàng không khác phải đảm bảo khoảng cách an toàn tối thiểu bao nhiêu mét đối với lỗ thông hơi nhiên liệu của tàu bay?",o:["Cách 3m","Cách 30m","Cách 2.5m","Cách 15m"],a:3},
  {q:"Khu vực lỗ thông hơi nhiên liệu của tàu bay có nguy hiểm gì?",o:["Hơi dầu gây mùi hôi khó chịu","Hơi dầu gây khó thở","Hơi dầu dễ bắt cháy có thể thoát ra trong quá trình nạp dầu","Cả 03 câu trên đều sai"],a:2},
  {q:"Trong phạm vi bao nhiêu mét, không được phép sử dụng máy ảnh, thiết bị tạo nhiệt…khi đang nạp NL cho tàu bay?",o:["03m","15m","30m"],a:1},
  {q:"Trong phạm vi bao nhiêu mét, PT/TTB không được phép khởi động động cơ khi đang nạp NL cho tàu bay?",o:["03m","15m","30m"],a:1},
  {q:"Xử lý tình huống tràn nhiên liệu?",o:["Người và phương tiện không được đi qua vùng nhiên liệu tràn, các phương tiện có động cơ phải lập tức tránh xa hoặc tắt động cơ","Nhiên liệu phải được rửa sạch trước khi tàu bay khởi động động cơ","Nhiên liệu tràn trên 04m phải thông báo ngay cho Trực ban Cảng để triển khai xử lý theo quy trình","Tất cả các nội dung trên"],a:3},
  {q:"Nếu có cháy xảy ra sau khi nhiên liệu tràn, phương thức nào sau đây phải được áp dụng?",o:["Sử dụng ngay các bình chữa cháy có sẵn trong khu vực để dập tắt lửa","Thông báo ngay cho Trực ban Cảng","Tổ chức sơ tán hành khách ra khỏi tàu bay ngay","Tất cả các nội dung trên"],a:3},
  {q:"Nhân viên làm việc xung quanh tàu bay phải tuân thủ những quy định an toàn sân đỗ nhằm giảm thiểu sự cố gì?",o:["Trang thiết bị phục vụ mặt đất va quẹt vào con người","Tàu bay bị va đập bởi trang thiết bị mặt đất","Trang thiết bị phục vụ mặt đất va quẹt vào nhau","Tất cả các ý trên"],a:3},
  {q:"Nhân viên làm việc tại khu vực sân đỗ tàu bay phải tuân thủ các quy định an toàn nhằm mục đích gì?",o:["Giảm thiểu mức thấp nhất hư hỏng tàu bay","Ngăn ngừa khả năng xảy ra tai nạn/ sự cố","Hạn chế tử vong cho người tham gia làm việc","Giảm thiểu mức thấp nhất hư hỏng trang thiết bị"],a:1},
  {q:"F.O.D có thể gây nguy hại như thế nào?",o:["Hư hỏng trang thiết bị, phương tiện","Gây tử vong cho con người","Hư hỏng cho tàu bay","Tất cả các ý trên"],a:3},
  {q:"Khi phát hiện F.O.D trên đường cất hạ cánh, đường lăn, sân đỗ trách nhiệm chúng ta sẽ làm gì?",o:["Tiến hành thu nhặt ngay để đảm bảo an toàn. Trường hợp vượt quá khả năng xử lý, thông báo ngay cho Trực ban Cảng","Yêu cầu nhân viên vệ sinh trên sân đỗ thu nhặt F.O.D và thông báo cho Trực ban Cảng","Thông báo cho Trực Giám đốc sân bay và thông báo cho Đội PVHK","Thông báo cho TBT sân bay và thông báo cho Đội AN sân đỗ"],a:0},
  {q:"F.O.D trong sân bay là gì?",o:["Mảnh vụn bê tông do sân đường hư hỏng","Chai lọ, mảnh vỡ, mẩu giấy, hộp sơn, mũ, lốp xe trên đường lăn, sân đỗ, đường CHC","Xác chim, Xác động vật trên đường lăn, sân đỗ","Tất cả các ý trên"],a:3},
  {q:"Những nguy hại nghiêm trọng khi động cơ hút hoặc thổi những mảnh vụn hoặc đai ốc sẽ gây những hậu quả như thế nào?",o:["Các vật thể nhỏ sẽ được thổi va đập vào hành khách, nhân viên, trang thiết bị","Các vật thể nhỏ sẽ được thổi va đập vào tàu bay khác","Động cơ tàu bay hư hỏng","Tất cả các ý trên"],a:3},
  {q:"Trước khi tàu bay lăn vào vị trí đỗ ai chịu trách nhiệm kiểm tra F.O.D trên bãi đỗ?",o:["Nhân viên thợ máy mặt đất","Nhân viên phục vụ mặt đất","Nhân viên an ninh hàng không","Tất cả cán bộ nhân viên tham gia phục vụ chuyến bay"],a:3},
  {q:"Các mối nguy hiểm tiềm ẩn của F.O.D có thể gây nguy hại đến đối tượng nào sau đây?",o:["Phương tiện, trang thiết bị","Tàu bay","Con người","Tất cả các ý trên"],a:3},
  {q:"Để ngăn ngừa các vật lạ gây hư hại (FOD), phải làm gì?",o:["Quản lý chặt chẽ và phải thu gom tất cả công cụ, vật tư sau khi kết thúc làm việc trên sân đỗ","Kiểm tra trang thiết bị, phương tiện tránh để rơi vãi vật tư, công cụ xuống khu bay","Tổ chức kiểm tra và vệ sinh thường xuyên khu bay","Tất cả các ý trên"],a:3},
  {q:"Có thể phát hiện F.O.D ở khu vực nào?",o:["Sân đỗ","Đường lăn (taxiway)","Đường hạ cất cánh","Tất cả các ý trên"],a:3},
  {q:"Khi phát hiện các vụ việc bất thường, sự cố, tai nạn hoặc các vụ việc có khả năng dẫn đến sự cố, tai nạn xẩy ra trong phạm vi Cảng thì phải làm gì?",o:["Thông báo ngay cho đơn vị phụ trách khu vực đó","Thông báo ngay cho Trực ban Cảng","Thông báo ngay Phòng AN sân bay","Thông báo ngay cho Phòng An toàn & KSCL"],a:1},
  {q:"Khoảng cách an toàn phía trước và phía sau một tàu bay đang lăn là bao nhiêu m?",o:["Phía trước 250m & phía sau 200m","Phía trước 250m & phía sau 250m","Phía trước 200m & phía sau 200m","Phía trước 200m & Phía sau 125m"],a:0},
  {q:"Khi nào nhân viên được phép đi lại hoặc đứng trên các con lăn, bánh xe truyền động, băng chuyền đang hoạt động?",o:["Khi sàn nâng hạ ULD không hoạt động","Chỉ được phép khi cần thiết","Không được phép","Khi có tay vịn chắc chắn để không ngã"],a:2},
  {q:"Tại khu vực nào trên sân đỗ tàu bay các trang thiết bị phục vụ tàu bay không được dừng chờ hoặc đỗ lại?",o:["Bên trong các khu vực kẻ vạch đỏ","Phía trước đầu vị trí đỗ","Khu vực kẻ vạch trắng","Tất cả các khu vực miễn sao không ảnh hưởng tàu bay vào vị trí đỗ"],a:0},
  {q:"Những Ai được phép tiếp cận tàu bay tại vị trí đỗ?",o:["Người của đơn vị phục vụ mặt đất","Người có thẻ kiểm soát an ninh","Người có thẻ kiểm soát an ninh phù hợp và có nhiệm vụ","Nhân viên an ninh hàng không"],a:2},
  {q:"Làn đường cho phép các trang thiết bị và phương tiện vận chuyển lưu thông trên sân đỗ được giới hạn bởi vạch kẻ nào?",o:["Vạch kẻ liên tục màu đỏ","Vạch kẻ liên tục màu cam","Vạch kẻ liên tục màu trắng","Vạch kẻ không liên tục màu vàng"],a:3},
  {q:"Nhân viên làm việc trên sân đỗ được phép ngồi tránh nắng dưới các phương tiện, trang thiết bị nào?",o:["Xe xúc kiện hàng nặng","Xe thang","Xe phục vụ hành khách tàn tật","Hoàn toàn không được phép"],a:3},
  {q:"Trang thiết bị nào nhân viên làm việc trên sân đỗ không được phép ngồi hoặc đứng khi phương tiện đang di chuyển?",o:["Băng chuyền của Xe băng chuyền","Bậc thang của Xe thang","Sàn nâng của Xe nâng hàng/hạ ULD","Tất cả các ý trên"],a:3},
  {q:"Vạch sơn màu đỏ được kẻ bao quanh vị trí tàu bay đỗ có ý nghĩa gì?",o:["Thể hiện khoảng cách an toàn giữa tàu bay với người và trang thiết bị mặt đất","Thể hiện khoảng cách an toàn giữa tàu bay và nhà ga","Thể hiện khoảng cách an toàn giữa tàu bay và đường lăn","Thể hiện khoảng cách an toàn giữa tàu bay và đường cất hạ cánh"],a:0},
  {q:"Người và các trang thiết bị mặt đất có được dừng chờ hoặc đỗ lại bên trong vạch giới hạn an toàn tại vị trí bãi đỗ khi tàu bay di chuyển vào hoặc ra khỏi vị trí đỗ không?",o:["Không được dừng chờ bên trong vạch giới hạn an toàn vị trí đỗ (ngoài thiết bị và người tham gia đẩy tàu bay khi đẩy lùi)","Được dừng chờ bên trong ranh giới an toàn khi thợ máy mặt đất đồng ý","Được dừng chờ bên trong vạch giới hạn an toàn vị trí đỗ nếu là tàu bay nhỏ","Có thể dừng chờ bên trong giới hạn an toàn vị trí đỗ nếu là thiết bị nhỏ"],a:0},
  {q:"Mục đích của An toàn sân đỗ là gì?",o:["Ngăn ngừa hư hỏng tàu bay trên sân đỗ hoặc trên khu vực đường lăn, hạ cất cánh","Ngăn ngừa tai nạn, sự cố xảy ra cho con người trong quá trình hoạt động trên sân đỗ","Ngăn ngừa hư hỏng đối với tài sản, TTB phục vụ trong khu bay","Tất cả các ý trên"],a:3},
  {q:"Ai là người có trách nhiệm xác định mối nguy trong công việc?",o:["Cán bộ phụ trách về an toàn của Cảng","Cán bộ ca phụ trách trực tiếp","Nhân viên thực hiện công việc","Mọi người liên quan đến công việc"],a:3},
  {q:"Tại sao người điều khiển trang thiết bị/phương tiện và cá nhân làm việc xung quanh tàu bay phải tuân thủ các quy định an toàn?",o:["Nhằm ngăn ngừa, giảm thiểu tai nạn/sự cố cho con người","Nhằm ngăn ngừa, giảm thiểu tai nạn/sự cố cho tàu bay","Nhằm ngăn ngừa, giảm thiểu tai nạn/sự cố cho trang thiết bị mặt đất","Tất cả các ý trên"],a:3},
  {q:"Quy định phải mặc áo phản quang như thế nào?",o:["Trong suốt thời gian làm việc trên sân đỗ","Khi làm việc trong khu vực tàu bay đỗ","Khi làm việc trong mùa mưa, tầm nhìn hạn chế","Khi làm việc vào ban đêm"],a:0},
  {q:"Sân đỗ tàu bay (Apron) là gì?",o:["Khu vực chỉ dành riêng cho tàu bay đỗ để xếp, trả hành khách, hành lý","Khu vực dành cho tàu bay đỗ để phục vụ hành khách lên xuống, chất xếp, bốc dỡ hành lý, bưu gửi, hàng hoá, tiếp nhiên liệu, phục vụ kỹ thuật hoặc bảo dưỡng tàu bay","Khu vực chỉ dành riêng cho tàu bay đỗ để tiếp nhiên liệu, phục vụ kỹ thuật hoặc bảo dưỡng tàu bay","Khu vực dành cho tàu bay đỗ để xếp, trả hành khách, hành lý, thư, bưu phẩm, bưu kiện, hàng hoá, tiếp nhiên liệu, phục vụ kỹ thuật hoặc cất hạ cánh"],a:1},
  {q:"Đường cất hạ cánh (Runway) là gì?",o:["Khu vực hình vuông được xác định trên sân bay mặt đất dùng cho tàu bay cất cánh và hạ cánh","Khu vực hình chữ nhật được xác định trên mặt đất tại khu bay dùng cho tàu bay cất cánh và hạ cánh","Khu vực hình chữ nhật được xác định trên sân bay mặt đất dùng cho tàu bay đỗ lại qua đêm","Khu vực hình chữ nhật được xác định trên sân bay mặt đất dùng cho tàu bay cất cánh"],a:1},
  {q:"Đường công vụ (Road) là gì?",o:["Là đường được thiết lập trên sân đỗ tàu bay","Là tuyến đường nằm trong khu hoạt động để dùng cho phương tiện cơ giới","Để người vận hành phương tiện/thiết bị lưu thông trong quá trình phục vụ bay trên sân đỗ và dừng chờ quan sát nhường đường cho tàu bay lăn tại các giao lộ","Tất cả các ý trên"],a:3},
  {q:"Vạch giới hạn an toàn vị trí đỗ để làm gì?",o:["Là đường giới hạn khu vực an toàn của thang ống trên sân đỗ","Là đường giới hạn khu vực an toàn không cho tàu bay tiếp cận","Là đường giới hạn tại vị trí đỗ, trang thiết bị không được phép vượt qua khi tàu bay lăn vào/ra khỏi vị trí đỗ","Là đường giới hạn phạm vi dừng chờ dành riêng cho trang thiết bị phục vụ tàu bay"],a:2},
  {q:"Vạch giới hạn an toàn vị trí đỗ thể hiện màu sắc như thế nào?",o:["Vạch kẻ xiên không liên tục màu đỏ","Vạch kẻ đôi, liên tục màu trắng","Vạch kẻ liên tục màu đỏ","Gạch kẻ không liên tục màu trắng"],a:2},
  {q:"Nhân viên làm việc trên sân đỗ được phép ăn uống trên sân đỗ hoặc trên phương tiện trong sân đỗ khi nào?",o:["Chỉ khi rảnh rỗi","Được phép của cán bộ quản lý","Đúng giờ nghỉ","Không được phép"],a:3},
  {q:"Các khu vực cần chú ý đặc biệt xung quanh khu vực phục vụ mặt đất cho tàu bay?",o:["Khu vực 02 đầu chóp cánh của tàu bay","Khu vực phía trước động cơ tàu bay","Khu vực phía sau động cơ tàu bay","Tất cả các ý trên"],a:3},
  {q:"Khi tàu bay đang lăn vào bến đỗ, nhân viên mặt đất chỉ được phép băng ngang giữa nhân viên đánh tín hiệu hoặc hệ thống chỉ dẫn điểm đỗ tự động?",o:["Khi được sự đồng ý của nhân viên đánh tín hiệu dẫn tàu","Khi không làm ảnh hưởng đến việc dẫn tàu vào vị trí đỗ an toàn","Chỉ khi được sự cho phép của Trực ban Cảng","Không được phép"],a:3},
  {q:"Phương tiện, trang thiết bị chỉ cần trang bị bộ đàm để liên lạc với Đài chỉ huy khi:",o:["Chỉ khi nào tham gia ứng phó khẩn nguy","Hoạt động trên đường cất hạ cánh","Bất kỳ khi nào tham gia làm việc trong khu bay","Đang vận hành trong khu bay và nếu có nhu cầu liên lạc với Đài chỉ huy"],a:2},
  {q:"Tốc độ phương tiện, trang thiết bị khi lưu thông bên trong vạch giới hạn an toàn vị trí đỗ?",o:["15 km/h","25/km","5 km/h","10 km/h"],a:2},
  {q:"Tốc độ phương tiện, trang thiết bị lưu thông trên đường công vụ?",o:["25 km/h","35 km/h","30 km/h","Câu b và c tùy vào khu vực theo quy định cụ thể"],a:3},
  {q:"Xe đầu kéo hành lý/hàng hóa chỉ được kéo tối đa mấy mâm hàng / thùng đựng hành lý?",o:["3","2","5","4"],a:3},
  {q:"Các thiết bị điện có thể tự ý đưa vào sử dụng không cần phải kê khai xin phép với cơ quan quản lý nhà ga:",o:["Các thiết bị nhỏ gọn như máy khoan điện","Các thiết bị điện như bàn ủi, lò vi song","Các thiết bị điện đơn giản như nồi cơm điện","a, b và c đều không được phép"],a:3},
  {q:"Khi đang di chuyển cắt qua vệt dẫn lăn của tàu bay vào vị trí đỗ, nhân viên mặt đất phải làm gì?",o:["Quan sát, giảm tốc độ và nhường đường cho tàu bay lăn tại các giao lộ giao nhau với các vệt lăn Y, Y1, Y6, Y7 PHẢI DỪNG LẠI","Dừng lại và nhường đường cho tàu bay lăn","Chạy nhanh qua tránh chặn đường tàu bay lăn","Tiếp tục đi cho đến khi nhân viên đánh tín hiệu ra dấu hiệu dừng lại"],a:0},
  {q:"Khi hoàn tất tiếp cận tàu bay, các trang thiết bị mặt đất phải?",o:["Chèn bánh hoặc hạ chân chống (với thiết bị có chân chống)","Không được tắt máy và duy trì tại vị trí tiếp cận phục vụ tàu bay","Lui ra khỏi vạch giới hạn an toàn vị trí đỗ","Dừng chờ xung quanh vị trí tiếp cận tàu bay"],a:0},
  {q:"Khi nào trang thiết bị, nhân viên phục vụ được tiếp cận tàu bay?",o:["Động cơ ngừng hoạt động","Đèn chống va chạm tắt","Tàu bay được đóng chèn","Tất cả các ý trên"],a:3},
  {q:"Kết thúc phục vụ tàu bay, các trang thiết bị mặt đất phải?",o:["Tắt máy xe, và chèn bánh hoặc hạ chân chống tại vị trí tiếp cận","Không được tắt máy và duy trì tại vị trí tiếp cận phục vụ tàu bay","Lui ra khỏi vạch giới hạn an toàn vị trí đỗ","Dừng chờ xung quanh vị trí tiếp cận tàu bay"],a:2},
  {q:"Vị trí đỗ tàu bay (Aircraft stand) là:",o:["Khu vực chỉ dành riêng cho tàu bay đỗ để xếp, trả hành khách, hành lý","Khu vực dành cho tàu bay đỗ để xếp, trả hành khách, hành lý, thư, bưu phẩm, bưu kiện, hàng hoá, tiếp nhiên liệu, phục vụ kỹ thuật hoặc bảo dưỡng tàu bay","Khu vực trên sân đỗ tàu bay dành cho một tàu bay đỗ","Khu vực trên sân đỗ tàu bay dành cho nhiều tàu bay đỗ"],a:2},
  {q:"Sân bay (Aerodrome) là:",o:["Khu vực xác định được xây dựng trên mặt đất hoặc mặt nước để bảo đảm cho tàu bay di chuyển","Khu vực xác định được xây dựng trên mặt đất hoặc mặt nước để bảo đảm cho tàu bay cất cánh","Khu vực xác định được xây dựng trên mặt đất hoặc mặt nước để bảo đảm cho tàu bay hạ cánh","Một khu vực xác định trên mặt đất hoặc mặt nước, bao gồm nhà cửa, công trình và trang thiết bị được dùng một phần hay toàn bộ cho tàu bay bay đến, bay đi và di chuyển"],a:3},
  {q:"Cảng hàng không (Airport) là:",o:["Sân bay, nhà ga và trang thiết bị, công trình cần thiết khác được sử dụng cho tàu bay đi và thực hiện vận chuyển hàng không","Nhà ga và trang thiết bị, công trình cần thiết khác được sử dụng cho tàu bay đi, đến và thực hiện vận chuyển hàng không","Khu vực xác định, bao gồm sân bay, nhà ga và trang thiết bị, công trình cần thiết khác được sử dụng cho tàu bay bay đến, bay đi và thực hiện vận chuyển hàng không","Sân bay và trang thiết bị, công trình cần thiết khác được sử dụng cho tàu bay đi, đến và thực hiện vận chuyển hàng không"],a:2},
  {q:"Khu vực hoạt động (Movement area) là:",o:["Khu vực xác định được xây dựng để bảo đảm cho tàu bay di chuyển","Khu vực xác định được xây dựng để bảo đảm cho tàu bay cất cánh","Khu vực xác định được xây dựng để bảo đảm cho tàu bay hạ cánh","Là một phần sân bay được sử dụng cho tàu bay cất cánh, hạ cánh, lăn bánh, bao gồm khu vực di chuyển và sân đỗ tàu bay"],a:3},
  {q:"Khu vực di chuyển (Manoeuvring area) là:",o:["Là một phần của sân bay được sử dụng cho tàu bay di chuyển","Là một phần của sân bay được sử dụng cho tàu bay hạ cánh","Là một phần của sân bay được sử dụng cho tàu bay cất cánh","Là một phần của sân bay được sử dụng cho tàu bay cất cánh, hạ cánh, lăn, không bao gồm sân đỗ tàu bay"],a:3},
  {q:"Chọn đáp án đúng nhất:",o:["Phương tiện/trang thiết bị phải dừng lại quan sát, giảm tốc độ và nhường đường cho tàu bay lăn tại các giao lộ","Phương tiện/trang thiết bị đang lưu thông trên đường công vụ phải nhường đường cho Trang thiết bị/phương tiện phục vụ tàu bay di chuyển từ trong vị trí đỗ ra đường công vụ","Phương tiện/trang thiết bị đang lưu thông trên đường công vụ phải nhường đường cho phương tiện khẩn nguy trong mọi lúc","a,b và c đều đúng"],a:3},
  {q:"Chọn đáp án đúng nhất:",o:["Phương tiện/trang thiết bị không có nhiệm vụ phục vụ tàu bay được tiếp cận vị trí đỗ tàu bay khi vị trí đỗ tàu bay trống","Phương tiện/trang thiết bị không có nhiệm vụ phục vụ tàu bay được chạy cắt ngay vị trí đỗ tàu bay","Phương tiện/trang thiết bị không có nhiệm vụ phục vụ tàu bay chỉ được chạy cắt ngay vị trí đỗ tàu bay khi đường công vụ bị tắc nghẽn","Phương tiện/trang thiết bị không có nhiệm vụ phục vụ tàu bay không được tiếp cận vị trí đỗ tàu bay"],a:3},
  {q:"Các thiết bị có chiều cao vượt quá trị số ghi trên biển cảnh báo hạn chế chiều cao được di chuyển qua khi:",o:["Có nhân viên cảnh giới độ cao an toàn","Khi cần thiết","Khi đảm bảo chiều cao đủ để xe đi qua","Không được phép"],a:3},
  {q:"Định nghĩa Hot Spot là:",o:["Các vị trí trong khu bay được nhận dạng tiềm ẩn nguy cơ mất an toàn, cần phải tăng cường sự chú ý","Các vị trí trong khu bay nằm trong ranh giới vạch kẻ xiên song song liên tục màu đỏ","Các vị trí trong khu bay được xác định là nguy hiểm và hạn chế khai thác sử dụng","Các vị trí trong khu bay được xác định là nguy hiểm và không được phép khai thác sử dụng"],a:0},
  {q:"Khi phát hiện cháy tại khu vực sân đỗ, nhân viên cần làm gì đầu tiên?",o:["Báo động cháy và gọi Trực ban Cảng","Dùng bình chữa cháy dập lửa ngay","Sơ tán hành khách","Chạy ra khỏi khu vực"],a:0},
  {q:"Nhân viên được phép hút thuốc tại khu vực nào trong sân bay?",o:["Sân đỗ tàu bay","Khu vực cách xa tàu bay 50m","Phòng hút thuốc được quy định trong nhà ga","Khu vực đường công vụ"],a:2},
  {q:"Khi điều khiển phương tiện trong khu bay vào ban đêm, nhân viên phải bật:",o:["Đèn chiếu sáng và đèn cảnh báo","Đèn pha chiếu xa","Đèn tín hiệu khẩn cấp","Tất cả các loại đèn trên"],a:0}
];

export const analysisData: AnalysisCategory[] = [
  {icon:'🅰️',title:'Vạch kẻ & Dấu hiệu',count:6,color:'#dc2626',rules:['Đỏ liên tục = Giới hạn an toàn vị trí đỗ','Vàng liên tục = Tim đường lăn','Trắng đôi liên tục = Vạch kẻ đôi (khu vực ưu tiên)','Đỏ xiên liên tục = Khu vực ưu tiên cầu hành khách','Vàng không liên tục = Làn đường cho xe/trang thiết bị'],tip:'Đỏ giới hạn – Vàng tim đường – Trắng đôi ưu tiên – Đỏ xiên cấm đứng'},
  {icon:'🅱️',title:'Cầu hành khách',count:4,color:'#7c3aed',rules:['Cầu di chuyển → chuông + đèn cảnh báo phải bật','Không ai được lên/xuống cầu thang bộ khi cầu đang di chuyển','Cấm dừng/đỗ trong khu vực giới hạn cầu hành khách','Hai cánh tay bắt chéo trên đầu = không được tiếp cận'],tip:'Cầu chạy – chuông kêu – không ai lên – cả ngày cấm đỗ'},
  {icon:'🅲',title:'Động cơ & Khoảng cách',count:5,color:'#0891b2',rules:['Code A, B: trước 4m – sau 40m','Code C: trước 6m – sau 60m','Code D, E, F: trước 8m – sau 80m','Phía trước = HÚT F.O.D','Phía sau = THỔI F.O.D, người, phương tiện'],tip:'4–40 / 6–60 / 8–80 — Trước hút – Sau thổi'},
  {icon:'🅳',title:'Nhiên liệu & Phòng cháy',count:6,color:'#ea580c',rules:['15m = khoảng cách tối thiểu với lỗ thông hơi NL','15m = cấm máy ảnh, thiết bị tạo nhiệt, khởi động động cơ','Tràn NL > 4m → báo Trực ban Cảng','Cháy sau tràn NL → bình chữa cháy + báo Cảng + sơ tán','Cấm hút thuốc toàn bộ (trừ phòng hút thuốc nhà ga)'],tip:'15 mét cấm lửa – 4 mét báo Cảng – cháy thì sơ tán'},
  {icon:'🅴',title:'F.O.D',count:7,color:'#16a34a',rules:['F.O.D = mảnh vụn, chai lọ, mẩu giấy, hộp sơn, mũ, lốp xe, xác chim…','Nguy hại: hư hỏng TTB, tàu bay, gây tử vong','Phát hiện → thu nhặt ngay; vượt khả năng → báo Trực ban Cảng','Phòng ngừa: quản lý công cụ + kiểm tra TTB + vệ sinh khu bay','Mọi nhân viên đều có trách nhiệm'],tip:'Thấy F.O.D – nhặt ngay – không được thì báo Cảng'},
  {icon:'🅵',title:'Định nghĩa khu bay',count:9,color:'#2563eb',rules:['Sân bay (Aerodrome): khu vực trên đất/nước','Cảng hàng không: sân bay + nhà ga + TTB','Khu vực hoạt động = di chuyển + sân đỗ','Khu vực di chuyển = đường CHC + đường lăn','Sân đỗ (Apron): tàu bay đỗ phục vụ','Đường CHC: hình chữ nhật cất/hạ cánh','Đường công vụ: cho xe/người lưu thông','Vị trí đỗ: dành cho MỘT tàu bay','Hot Spot: vị trí tiềm ẩn nguy cơ'],tip:'Sân bay > Cảng > Hoạt động > Di chuyển > Sân đỗ'},
  {icon:'🅶',title:'Quy tắc di chuyển',count:13,color:'#d97706',rules:['Nhường đường: TTB nhường tàu bay lăn, nhường xe khẩn nguy','Dừng quan sát tại giao lộ','Không tiếp cận vị trí đỗ nếu không nhiệm vụ','5 km/h trong vạch; 25–30 km/h đường công vụ','Xe đầu kéo tối đa 4 mâm','Cấm ăn uống, hút thuốc, ngồi tránh nắng','Áo phản quang suốt thời gian làm việc','Thiết bị điện không tự ý dùng','Đứng ngoài vạch khi tàu lăn vào','Không băng ngang vệt dẫn lăn','Lui ra khỏi vạch khi kết thúc','Tiếp cận khi: động cơ ngừng + đèn tắt + đóng chèn','Ban đêm: bật đèn chiếu sáng + cảnh báo'],tip:'Nhường – Dừng – Không vào – 5/4/3 – Đủ 3 điều kiện mới tiếp cận'},
  {icon:'🅷',title:'Xử lý khẩn cấp',count:4,color:'#dc2626',rules:['Phát hiện sự cố → báo ngay Trực ban Cảng','Phát hiện cháy → báo động + gọi Trực ban Cảng TRƯỚC','Tràn nhiên liệu > 4m → báo Trực ban Cảng','Cháy sau tràn NL → bình chữa cháy + báo Cảng + sơ tán'],tip:'Báo Cảng trước – Xử lý sau – Ưu tiên con người'}
];

export const masterData: MasterData = {
  mantra:'ĐỎ LIỀN – giới hạn đỗ · VÀNG LIỀN – tim đường lăn · TRẮNG ĐÔI – cầu ưu tiên · ĐỎ XIÊN – cấm đứng · VÀNG ĐỨT – làn xe',
  phases:[
   {time:'0:00 – 0:30',title:'⏱ PHÚT 1A — THẦN CHÚ MÀU SẮC',color:'#dc2626',content:[
     {k:'ĐỎ LIỀN',v:'Giới hạn an toàn vị trí đỗ'},
     {k:'VÀNG LIỀN',v:'Tim đường lăn tàu bay'},
     {k:'TRẮNG ĐÔI',v:'Khu vực ưu tiên cầu hành khách'},
     {k:'ĐỎ XIÊN',v:'Cấm đứng/đi lại khi thang ống hoạt động'},
     {k:'VÀNG ĐỨT',v:'Làn đường cho xe/trang thiết bị lưu thông'},
     {k:'🎯 Nhớ màu',v:'Nhớ cả 6 câu vạch kẻ!'}
   ]},
   {time:'0:30 – 1:00',title:'⏱ PHÚT 1B — 8 CÂU CHÂM NGÔN',color:'#7c3aed',content:[
     {k:'1. Vạch kẻ',v:'Đỏ – Vàng – Trắng – Đỏ xiên – Vàng đứt'},
     {k:'2. Cầu hành khách',v:'Cầu chạy → Chuông kêu → Không ai lên'},
     {k:'3. Động cơ',v:'4-40 · 6-60 · 8-80 — Trước hút, sau thổi'},
     {k:'4. Nhiên liệu',v:'15 mét cấm lửa · 4 mét báo Cảng'},
     {k:'5. FOD',v:'Thấy rác → Nhặt ngay → Không được thì báo'},
     {k:'6. Định nghĩa',v:'Sân bay > Cảng > Hoạt động > Di chuyển > Sân đỗ'},
     {k:'7. Di chuyển',v:'Nhường – Dừng – Không vào – 5/4/3'},
     {k:'8. Khẩn cấp',v:'Báo Cảng TRƯỚC – Xử lý SAU'}
   ]},
   {time:'1:00 – 2:00',title:'⏱ PHÚT 2 — BẢNG SỐ VÀNG',color:'#0891b2',content:[
     {k:'4 – 40',v:'Code A,B: trước 4m – sau 40m'},
     {k:'6 – 60',v:'Code C: trước 6m – sau 60m'},
     {k:'8 – 80',v:'Code D,E,F: trước 8m – sau 80m'},
     {k:'15',v:'Nhiên liệu: khoảng cách + cấm lửa + cấm khởi động'},
     {k:'5 km/h',v:'Tốc độ trong vạch giới hạn an toàn'},
     {k:'25–30 km/h',v:'Tốc độ trên đường công vụ'},
     {k:'4',v:'Số mâm hàng tối đa xe đầu kéo'},
     {k:'250 – 200',v:'Tàu bay lăn: trước 250m – sau 200m'},
     {k:'4m',v:'Tràn NL > 4m → báo Trực ban Cảng'}
   ]},
   {time:'2:00 – 2:30',title:'⏱ PHÚT 3A — 10 ĐIỀU CẤM',color:'#ea580c',content:[
     {k:'1',v:'Cấm ăn uống trên sân đỗ'},
     {k:'2',v:'Cấm hút thuốc (trừ phòng hút thuốc)'},
     {k:'3',v:'Cấm ngồi tránh nắng dưới TTB'},
     {k:'4',v:'Cấm đứng trên băng chuyền/xe thang khi di chuyển'},
     {k:'5',v:'Cấm tự ý dùng thiết bị điện'},
     {k:'6',v:'Cấm băng ngang vệt dẫn lăn khi tàu vào bến'},
     {k:'7',v:'Cấm tiếp cận vị trí đỗ khi thiếu nhiệm vụ'},
     {k:'8',v:'Cấm vào khu vực ưu tiên cầu hành khách'},
     {k:'9',v:'Cấm dừng/đỗ trong vạch đỏ khi tàu vào/ra'},
     {k:'10',v:'Cấm vượt biển hạn chế chiều cao'}
   ]},
   {time:'2:30 – 3:00',title:'⏱ PHÚT 3B — 3 ĐIỀU KIỆN VÀNG + CHỐT',color:'#16a34a',content:[
     {k:'NGỪNG',v:'Động cơ tàu bay đã ngừng hoạt động'},
     {k:'TẮT',v:'Đèn chống va chạm đã tắt'},
     {k:'CHÈN',v:'Tàu bay đã được đóng chèn'},
     {k:'→ Công thức',v:'NGỪNG – TẮT – CHÈN = Đủ 3 điều kiện mới tiếp cận!'},
     {k:'🎯 CHỐT HẠ',v:'Đọc to 3 lần: "Đỏ-Vàng-Trắng-Xiên-Đứt · 4-6-8 · 15-5-4 · Ngừng-Tắt-Chèn"'}
   ]}
  ]
};

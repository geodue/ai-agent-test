export const questions = [
  {
    id: 1,
    axis: "CF",
    question: "새로운 프로젝트가 갑자기 떨어졌다. 나는?",
    answers: [
      {
        text: "바다 미팅룸으로 인비부터 보내고 일단 사람들을 모은다",
        scoreType: "C",
        score: 2,
      },
      {
        text: "민경님(누군가)에게 “이거 들으셨어요?” 하고 분위기부터 파악한다",
        scoreType: "C",
        score: 1,
      },
      {
        text: "지라와 인비를 세 번 보고 일단 캘린더를 본다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "위키 히스토리와 유사 사례를 조용히 뒤진다",
        scoreType: "F",
        score: 1,
      },
      {
        text: "아무 말 없이 지라 일감을 생성하고 관련 일감과 전체 구조를 짠다",
        scoreType: "F",
        score: 2,
      },
    ],
  },
  {
    id: 2,
    axis: "CF",
    question: "아이디어가 막힐 때 나는?",
    answers: [
      {
        text: "DST_CREW방에 “아무 말이나 해주세요” 하고 판을 벌린다",
        scoreType: "C",
        score: 2,
      },
      {
        text: "소현님(누군가)과 이야기하다가 갑자기 답을 찾는다",
        scoreType: "C",
        score: 1,
      },
      {
        text: "일단 커피를 마시며 모니터 앞에서 멍때린다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "AI에게 묻고, 답변이 별로면 프롬프트를 고쳐 다시 묻는다",
        scoreType: "F",
        score: 1,
      },
      {
        text: "AI에게 역할, 상황, 타깃, 말투까지 부여하고 거의 외주 맡기듯 끝까지 뽑아낸다",
        scoreType: "F",
        score: 2,
      },
    ],
  },
  {
    id: 3,
    axis: "CF",
    question: "팀 위클리에서 내 모습에 가까운 것은?",
    answers: [
      {
        text: "“짧게 공유드리면…” 하고 어느새 PT를 시작한다",
        scoreType: "C",
        score: 2,
      },
      {
        text: "프로젝트의 핵심 사항을 일목요연하게 공유한다",
        scoreType: "C",
        score: 1,
      },
      {
        text: "“특이 사항 없습니다” 하고 고개를 열심히 끄덕인다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "위클리 하루 전에 스크립트를 짜고 혼자 시뮬레이션을 한다",
        scoreType: "F",
        score: 1,
      },
      {
        text: "인배님의 위클리 취소 연락을 간절히 기다린다",
        scoreType: "F",
        score: 2,
      },
    ],
  },
  {
    id: 4,
    axis: "DI",
    question: "새로운 기획안을 만들 때 나는?",
    answers: [
      {
        text: "수치, 사례, 고객 반응, 경쟁사 자료부터 모은다",
        scoreType: "D",
        score: 2,
      },
      {
        text: "근거가 될 만한 레퍼런스를 먼저 찾아둔다",
        scoreType: "D",
        score: 1,
      },
      {
        text: "빈 문서를 열고 제목만 써놓은 채 잠시 굳는다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "먼저 그럴듯한 콘셉트명부터 붙여본다",
        scoreType: "I",
        score: 1,
      },
      {
        text: "근거는 나중에 붙이고, 일단 세계관부터 만든다",
        scoreType: "I",
        score: 2,
      },
    ],
  },
  {
    id: 5,
    axis: "DI",
    question: "“요즘 트렌드 반영해서 해봐요”라는 말을 들었다. 나는?",
    answers: [
      {
        text: "트렌드 리포트, 검색량, 기사, 경쟁사 사례를 싹 모은다",
        scoreType: "D",
        score: 2,
      },
      {
        text: "최근 잘된 사례들을 모아 공통점을 찾는다",
        scoreType: "D",
        score: 1,
      },
      {
        text: "‘요즘’이 대체 언제부터 언제까지인지 잠깐 고민한다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "“요즘 사람들은 이런 감성이잖아요” 하며 방향을 잡는다",
        scoreType: "I",
        score: 1,
      },
      {
        text: "갑자기 키워드 5개와 캠페인명 3개를 뽑아낸다",
        scoreType: "I",
        score: 2,
      },
    ],
  },
  {
    id: 6,
    axis: "DI",
    question: "기획안이 어딘가 허전하다. 나는?",
    answers: [
      {
        text: "고객 데이터, 매출, 클릭률 같은 숫자로 설득력을 보강한다",
        scoreType: "D",
        score: 2,
      },
      {
        text: "실제 사례나 레퍼런스를 더 붙여 안정감을 만든다",
        scoreType: "D",
        score: 1,
      },
      {
        text: "폰트 크기와 간격을 괜히 만져본다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "이름이나 카피를 바꿔 갑자기 있어 보이게 만든다",
        scoreType: "I",
        score: 1,
      },
      {
        text: "한 줄 스토리를 붙여 완전히 다른 기획처럼 보이게 만든다",
        scoreType: "I",
        score: 2,
      },
    ],
  },
  {
    id: 7,
    axis: "LH",
    question: "의견이 갈릴 때 나는?",
    answers: [
      {
        text: "“판단 기준부터 정해야 할 것 같습니다” 하고 기준표를 세운다",
        scoreType: "L",
        score: 2,
      },
      {
        text: "목적과 우선순위를 기준으로 정리한다",
        scoreType: "L",
        score: 1,
      },
      {
        text: "일단 양쪽 말을 들으며 고개를 끄덕인다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "“받는 사람 입장에서는 다르게 느낄 수 있어요”라고 말한다",
        scoreType: "H",
        score: 1,
      },
      {
        text: "누가 왜 저렇게 말하는지 감정과 맥락부터 읽는다",
        scoreType: "H",
        score: 2,
      },
    ],
  },
  {
    id: 8,
    axis: "LH",
    question: "애매한 업무가 생겼을 때 나는?",
    answers: [
      {
        text: "업무 범위, 담당자, 결정권자를 먼저 정리한다",
        scoreType: "L",
        score: 2,
      },
      {
        text: "관련 문서와 히스토리를 보고 어디까지가 내 역할인지 확인한다",
        scoreType: "L",
        score: 1,
      },
      {
        text: "팀즈 입력창에 썼다 지웠다 하며 타이밍을 본다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "담당자에게 부담스럽지 않게 물어볼 말을 고른다",
        scoreType: "H",
        score: 1,
      },
      {
        text: "결국 파트장님을 찾아가 “이거 제가 이렇게 이해한 게 맞을까요?” 하고 맥락부터 맞춘다",
        scoreType: "H",
        score: 2,
      },
    ],
  },
  {
    id: 9,
    axis: "LH",
    question: "누군가 내 의견에 반대했다. 나는?",
    answers: [
      {
        text: "속으로 “근거가 약한데…”라고 생각하며 반박 자료를 준비한다",
        scoreType: "L",
        score: 2,
      },
      {
        text: "어떤 기준에서 다른 의견인지 먼저 확인한다",
        scoreType: "L",
        score: 1,
      },
      {
        text: "일단 “그럴 수도 있겠네요”라고 말하고 시간을 번다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "왜 그렇게 느꼈는지 배경을 먼저 물어본다",
        scoreType: "H",
        score: 1,
      },
      {
        text: "반대 의견 뒤에 있는 불안, 부담, 이해관계를 먼저 본다",
        scoreType: "H",
        score: 2,
      },
    ],
  },
  {
    id: 10,
    axis: "PX",
    question: "업무를 시작할 때 나는?",
    answers: [
      {
        text: "체크리스트, 일정, 산출물 정의부터 해야 마음이 편하다",
        scoreType: "P",
        score: 2,
      },
      {
        text: "할 일을 쪼개고 우선순위를 정한 뒤 시작한다",
        scoreType: "P",
        score: 1,
      },
      {
        text: "일단 파일부터 만들고 제목을 쓴다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "손대다 보면 방향이 잡히는 편이라 먼저 만들어본다",
        scoreType: "X",
        score: 1,
      },
      {
        text: "시작할 땐 분명 A였는데 하다 보니 Z까지 가 있다",
        scoreType: "X",
        score: 2,
      },
    ],
  },
  {
    id: 11,
    axis: "PX",
    question: "다음 주 PPP나 TDL을 준비할 때 나는?",
    answers: [
      {
        text: "다음 주 새 문서를 내가 직접 생성한다",
        scoreType: "P",
        score: 2,
      },
      {
        text: "매주 월요일마다 일주일치 TDL을 써놓지만, 현실과 어긋나 슬퍼한다",
        scoreType: "P",
        score: 1,
      },
      {
        text: "출근해서 그날의 TDL을 작성한다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "동료들의 TDL을 보고 단어만 바꿔서 쓴다",
        scoreType: "X",
        score: 1,
      },
      {
        text: "“너는 왜 비어있어?” “죄송합니다…”",
        scoreType: "X",
        score: 2,
      },
    ],
  },
  {
    id: 12,
    axis: "PX",
    question: "워크샵 조별 발표를 준비할 때 나는?",
    answers: [
      {
        text: "발표 시간, 역할, 자료 순서부터 나누고 팀을 안정시킨다",
        scoreType: "P",
        score: 2,
      },
      {
        text: "대략적인 목차를 잡고 각자 맡을 부분을 정한다",
        scoreType: "P",
        score: 1,
      },
      {
        text: "일단 “어떻게 할까요?” 하고 모두의 표정을 살핀다",
        scoreType: "neutral",
        score: 0,
      },
      {
        text: "발표 직전에 한 줄 카피가 떠오르면 그쪽으로 방향을 바꾼다",
        scoreType: "X",
        score: 1,
      },
      {
        text: "자료는 미완성인데 발표 콘셉트와 드립은 이미 완성되어 있다",
        scoreType: "X",
        score: 2,
      },
    ],
  },
];
export const questions = [
  {
    id: 1,
    axis: "CF",
    question: "새로운 프로젝트가 갑자기 떨어졌다. 나는?",
    answers: [
      {
        text: "일단 관련자 단톡방부터 만들고 “한 번 모이시죠”를 외친다",
        scoreType: "C",
        score: 2
      },
      {
        text: "옆자리 사람에게 “이거 들으셨어요?” 하며 분위기부터 파악한다",
        scoreType: "C",
        score: 1
      },
      {
        text: "메일을 세 번 읽고 일단 캘린더를 본다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "지난 회의록과 유사 사례부터 조용히 뒤진다",
        scoreType: "F",
        score: 1
      },
      {
        text: "아무 말 없이 문서 3개를 열고 혼자 전체 구조를 다시 짠다",
        scoreType: "F",
        score: 2
      }
    ]
  },
  {
    id: 2,
    axis: "CF",
    question: "아이디어가 막힐 때 나는?",
    answers: [
      {
        text: "주변 사람들에게 “아무 말이나 해주세요” 하고 판을 벌린다",
        scoreType: "C",
        score: 2
      },
      {
        text: "누군가와 이야기하다가 갑자기 답을 찾는다",
        scoreType: "C",
        score: 1
      },
      {
        text: "일단 커피를 마시며 멍때린다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "AI에게 묻고, 답변이 별로면 프롬프트를 고쳐 다시 묻는다",
        scoreType: "F",
        score: 1
      },
      {
        text: "AI에게 역할, 상황, 타깃, 말투까지 부여하고 끝까지 뽑아낸다",
        scoreType: "F",
        score: 2
      }
    ]
  },
  {
    id: 3,
    axis: "CF",
    question: "회의에서 내 모습에 가까운 것은?",
    answers: [
      {
        text: "가만히 있으려 했는데 어느새 내가 회의를 진행하고 있다",
        scoreType: "C",
        score: 2
      },
      {
        text: "중간중간 “그럼 이건 이렇게 보면 될까요?” 하고 흐름을 잡는다",
        scoreType: "C",
        score: 1
      },
      {
        text: "화면은 보고 있지만 영혼은 살짝 다른 탭에 있다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "조용히 듣다가 끝나고 정리본으로 존재감을 증명한다",
        scoreType: "F",
        score: 1
      },
      {
        text: "회의 중 이미 머릿속으로 문제점, 구조, 다음 액션까지 정리했다",
        scoreType: "F",
        score: 2
      }
    ]
  },
  {
    id: 4,
    axis: "DI",
    question: "새로운 기획안을 만들 때 나는?",
    answers: [
      {
        text: "수치, 사례, 고객 반응, 경쟁사 자료부터 모은다",
        scoreType: "D",
        score: 2
      },
      {
        text: "근거가 될 만한 레퍼런스를 먼저 찾아둔다",
        scoreType: "D",
        score: 1
      },
      {
        text: "빈 문서를 열고 제목만 써놓은 채 잠시 굳는다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "먼저 그럴듯한 콘셉트명부터 붙여본다",
        scoreType: "I",
        score: 1
      },
      {
        text: "근거는 나중에 붙이고, 일단 세계관부터 만든다",
        scoreType: "I",
        score: 2
      }
    ]
  },
  {
    id: 5,
    axis: "DI",
    question: "“요즘 트렌드 반영해서 해봐요”라는 말을 들었다. 나는?",
    answers: [
      {
        text: "트렌드 리포트, 검색량, 기사, 경쟁사 사례를 싹 모은다",
        scoreType: "D",
        score: 2
      },
      {
        text: "최근 잘된 사례들을 모아 공통점을 찾는다",
        scoreType: "D",
        score: 1
      },
      {
        text: "‘요즘’이 대체 언제부터 언제까지인지 고민한다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "“요즘 사람들은 이런 감성이잖아요” 하며 방향을 잡는다",
        scoreType: "I",
        score: 1
      },
      {
        text: "갑자기 키워드 5개와 캠페인명 3개를 뽑아낸다",
        scoreType: "I",
        score: 2
      }
    ]
  },
  {
    id: 6,
    axis: "DI",
    question: "기획안이 어딘가 허전하다. 나는?",
    answers: [
      {
        text: "고객 데이터, 매출, 클릭률 같은 숫자로 설득력을 보강한다",
        scoreType: "D",
        score: 2
      },
      {
        text: "실제 사례나 레퍼런스를 더 붙여 안정감을 만든다",
        scoreType: "D",
        score: 1
      },
      {
        text: "폰트 크기와 간격을 괜히 만져본다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "이름이나 카피를 바꿔 갑자기 있어 보이게 만든다",
        scoreType: "I",
        score: 1
      },
      {
        text: "한 줄 스토리를 붙여 완전히 다른 기획처럼 보이게 만든다",
        scoreType: "I",
        score: 2
      }
    ]
  },
  {
    id: 7,
    axis: "LH",
    question: "의견이 갈릴 때 나는?",
    answers: [
      {
        text: "“판단 기준부터 정해야 할 것 같습니다” 하고 기준표를 세운다",
        scoreType: "L",
        score: 2
      },
      {
        text: "목적과 우선순위를 기준으로 정리한다",
        scoreType: "L",
        score: 1
      },
      {
        text: "일단 양쪽 말을 들으며 고개를 끄덕인다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "“받는 사람 입장에서는 다르게 느낄 수 있어요”라고 말한다",
        scoreType: "H",
        score: 1
      },
      {
        text: "누가 왜 저렇게 말하는지 감정과 맥락부터 읽는다",
        scoreType: "H",
        score: 2
      }
    ]
  },
  {
    id: 8,
    axis: "LH",
    question: "결과물을 검토할 때 먼저 보는 것은?",
    answers: [
      {
        text: "목적, 구조, 우선순위, 누락 조건부터 본다",
        scoreType: "L",
        score: 2
      },
      {
        text: "정보가 논리적인 순서로 배치되어 있는지 본다",
        scoreType: "L",
        score: 1
      },
      {
        text: "일단 전체적으로 괜찮아 보이는지 본다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "사용자가 보고 헷갈리거나 불편할 포인트를 본다",
        scoreType: "H",
        score: 1
      },
      {
        text: "표현 하나가 사람에게 어떤 감정으로 닿을지까지 신경 쓴다",
        scoreType: "H",
        score: 2
      }
    ]
  },
  {
    id: 9,
    axis: "LH",
    question: "누군가 내 의견에 반대했다. 나는?",
    answers: [
      {
        text: "속으로 “근거가 약한데…”라고 생각하며 반박 자료를 준비한다",
        scoreType: "L",
        score: 2
      },
      {
        text: "어떤 기준에서 다른 의견인지 먼저 확인한다",
        scoreType: "L",
        score: 1
      },
      {
        text: "일단 “그럴 수도 있겠네요”라고 말하고 시간을 번다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "왜 그렇게 느꼈는지 배경을 먼저 물어본다",
        scoreType: "H",
        score: 1
      },
      {
        text: "반대 의견 뒤에 있는 불안, 부담, 이해관계를 먼저 본다",
        scoreType: "H",
        score: 2
      }
    ]
  },
  {
    id: 10,
    axis: "PX",
    question: "업무를 시작할 때 나는?",
    answers: [
      {
        text: "체크리스트, 일정, 산출물 정의부터 해야 마음이 편하다",
        scoreType: "P",
        score: 2
      },
      {
        text: "할 일을 쪼개고 우선순위를 정한 뒤 시작한다",
        scoreType: "P",
        score: 1
      },
      {
        text: "일단 파일부터 만들고 제목을 쓴다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "손대다 보면 방향이 잡히는 편이라 먼저 만들어본다",
        scoreType: "X",
        score: 1
      },
      {
        text: "시작할 땐 분명 A였는데 하다 보니 Z까지 가 있다",
        scoreType: "X",
        score: 2
      }
    ]
  },
  {
    id: 11,
    axis: "PX",
    question: "갑자기 방향이 바뀌었다. 나는?",
    answers: [
      {
        text: "한숨을 쉬지만 바로 일정표와 할 일 목록을 다시 짠다",
        scoreType: "P",
        score: 2
      },
      {
        text: "변경된 범위와 마감부터 다시 확인한다",
        scoreType: "P",
        score: 1
      },
      {
        text: "일단 “네, 확인했습니다”라고 답하고 현실을 받아들인다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "“오히려 좋아”라고 말하며 새 방향을 탐색한다",
        scoreType: "X",
        score: 1
      },
      {
        text: "방향이 바뀐 김에 더 재밌는 안까지 같이 제안한다",
        scoreType: "X",
        score: 2
      }
    ]
  },
  {
    id: 12,
    axis: "PX",
    question: "마감이 가까워졌을 때 나는?",
    answers: [
      {
        text: "남은 일을 쪼개고 하나씩 제거한다",
        scoreType: "P",
        score: 2
      },
      {
        text: "우선순위를 정해 중요한 것부터 마무리한다",
        scoreType: "P",
        score: 1
      },
      {
        text: "마감 시간을 보며 조용히 심박수가 오른다",
        scoreType: "neutral",
        score: 0
      },
      {
        text: "마감 직전부터 집중력이 갑자기 살아난다",
        scoreType: "X",
        score: 1
      },
      {
        text: "3시간 전의 내가 평소의 나보다 일을 더 잘한다고 믿는다",
        scoreType: "X",
        score: 2
      }
    ]
  }
];
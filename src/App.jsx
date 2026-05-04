import { useState } from "react";
import "./App.css";
import { questions } from "./questions";
import { results } from "./results";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzlyZH6WJMaMk4BWWDbrj7ObmBvNOX0s2a0zV8WG7mLFq1dfvaFANhzIBvrUn3e8KS3/exec";

const initialScores = {
  C: 0,
  F: 0,
  D: 0,
  I: 0,
  L: 0,
  H: 0,
  P: 0,
  X: 0,
};

const tieBreaker = {
  CF: "F",
  DI: "I",
  LH: "H",
  PX: "X",
};

const axisLabels = {
  C: "Connect",
  F: "Focus",
  D: "Data",
  I: "Idea",
  L: "Logic",
  H: "Human",
  P: "Plan",
  X: "Explore",
};

function getFinalCode(scores) {
  const first =
    scores.C > scores.F ? "C" : scores.F > scores.C ? "F" : tieBreaker.CF;

  const second =
    scores.D > scores.I ? "D" : scores.I > scores.D ? "I" : tieBreaker.DI;

  const third =
    scores.L > scores.H ? "L" : scores.H > scores.L ? "H" : tieBreaker.LH;

  const fourth =
    scores.P > scores.X ? "P" : scores.X > scores.P ? "X" : tieBreaker.PX;

  return `${first}${second}${third}${fourth}`;
}

function getAxisWinner(leftType, rightType, scores) {
  if (scores[leftType] > scores[rightType]) return leftType;
  if (scores[rightType] > scores[leftType]) return rightType;

  const axisKey = `${leftType}${rightType}`;
  return tieBreaker[axisKey] || rightType;
}

function App() {
  const [step, setStep] = useState("intro");
  const [userName, setUserName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState(initialScores);
  const [saveStatus, setSaveStatus] = useState("idle");

  const currentQuestion = questions[currentIndex];
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);
  const finalCode = getFinalCode(scores);
  const result = results[finalCode];

  const finalAxis = [
    {
      label: "작동 방식",
      left: "C",
      right: "F",
      winner: getAxisWinner("C", "F", scores),
    },
    {
      label: "판단 재료",
      left: "D",
      right: "I",
      winner: getAxisWinner("D", "I", scores),
    },
    {
      label: "의사결정",
      left: "L",
      right: "H",
      winner: getAxisWinner("L", "H", scores),
    },
    {
      label: "진행 방식",
      left: "P",
      right: "X",
      winner: getAxisWinner("P", "X", scores),
    },
  ];

  const getAxisBarData = (left, right) => {
    const leftScore = scores[left];
    const rightScore = scores[right];
    const total = leftScore + rightScore;

    if (total === 0 || leftScore === rightScore) {
      return {
        winnerSide: "center",
        fillPercent: 0,
      };
    }

    const diff = Math.abs(leftScore - rightScore);
    const winnerSide = leftScore > rightScore ? "left" : "right";

    return {
      winnerSide,
      fillPercent: (diff / total) * 100,
    };
  };

  const saveResultToSheet = async (finalScores) => {
    const code = getFinalCode(finalScores);
    const finalResult = results[code];

    if (!GOOGLE_SCRIPT_URL) {
      setSaveStatus("skipped");
      return;
    }

    try {
      setSaveStatus("saving");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: userName.trim(),
          resultCode: code,
          resultName: finalResult.name,
          mbti: finalResult.mbti,
          scores: finalScores,
        }),
      });

      setSaveStatus("saved");
    } catch (error) {
      console.error(error);
      setSaveStatus("error");
    }
  };

  const handleStart = () => {
    if (!userName.trim()) {
      alert("이름 또는 닉네임을 입력해주세요.");
      return;
    }

    setStep("quiz");
    setCurrentIndex(0);
    setScores(initialScores);
    setSaveStatus("idle");
  };

  const handleAnswer = async (answer) => {
    const nextScores = { ...scores };

    if (answer.scoreType !== "neutral") {
      nextScores[answer.scoreType] += answer.score;
    }

    if (currentIndex + 1 >= questions.length) {
      setScores(nextScores);
      setStep("result");
      await saveResultToSheet(nextScores);
      return;
    }

    setScores(nextScores);
    setCurrentIndex(currentIndex + 1);
  };

  const handleRestart = () => {
    setStep("intro");
    setCurrentIndex(0);
    setScores(initialScores);
    setSaveStatus("idle");
  };

  const handleShare = async () => {
    const shareText = `${userName.trim()}님의 AI Agent 유형은 ${result.name} (${result.mbti})!\n${result.subtitle}`;

    if (navigator.share) {
      await navigator.share({
        title: "나를 AI Agent로 만든다면?",
        text: shareText,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(shareText);
      alert("결과가 클립보드에 복사되었습니다.");
    }
  };

 if (step === "intro") {
  return (
    <main className="intro-full-page">
      <picture className="full-kv">
        <source media="(max-width: 768px)" srcSet="/images/kv-mobile.png" />
        <img src="/images/kv-desktop.png" alt="AI Agent mascot characters" />
      </picture>

      <section className="intro-overlay">
        <div className="intro-copy-panel">
          <p className="eyebrow">DST AI Agent Type Test</p>

          <h1>내가 만일 AI Agent라면?</h1>

          <p className="intro-text">
            일하는 방식, 회의 습관, AI 활용 패턴을 바탕으로
            나와 닮은 AI Agent 유형을 찾아보세요.
          </p>

          <div className="intro-start-panel">
            <div className="name-field">
              <label className="name-label" htmlFor="userName">
                이름 또는 닉네임
              </label>

              <input
                id="userName"
                className="name-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="예: 조윤식"
                maxLength={20}
                autoComplete="off"
              />
            </div>

            <button className="primary-button" onClick={handleStart}>
              테스트 시작하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

  if (step === "quiz") {
    return (
      <main className="page">
        <section className="card quiz-card">
          <div className="progress-row">
            <span>
              {currentIndex + 1} / {questions.length}
            </span>
            <span>{progress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <h2>{currentQuestion.question}</h2>

          <div className="answer-list">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={`${currentQuestion.id}-${index}`}
                className="answer-button"
                onClick={() => handleAnswer(answer)}
              >
                <span className="answer-number">{index + 1}</span>
                <span>{answer.text}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page result-page">
      <section className="card result-card">
        <p className="eyebrow">Your AI Agent Type</p>

        <p className="result-owner">{userName.trim()}님의 AI Agent 유형은</p>

        <div className="result-hero result-hero-large">
          <div className="profile-image-wrap profile-image-wrap-large">
            <img
              className="profile-image"
              src={`/images/agents/${finalCode}.png`}
              alt={result.name}
            />
          </div>

          <div className="result-title-block">
            <div className="result-code">{finalCode}</div>
            <h1>{result.name}</h1>
            <p className="mbti">MBTI로 치면 {result.mbti}에 가까운 유형</p>
          </div>
        </div>

        <h2>{result.subtitle}</h2>

        <div className="long-summary">
          {result.summary.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="axis-panel">
          <h3>성향 분석</h3>

          <div className="axis-list">
            {finalAxis.map((axis) => {
              const barData = getAxisBarData(axis.left, axis.right);

              return (
                <div className="axis-item" key={axis.label}>
                  <div className="axis-title-row">
                    <span>{axis.label}</span>
                    <strong>
                      {axis.winner} · {axisLabels[axis.winner]}
                    </strong>
                  </div>

                  <div className="axis-label-row">
                    <span>
                      {axis.left} · {axisLabels[axis.left]}
                    </span>
                    <span>
                      {axis.right} · {axisLabels[axis.right]}
                    </span>
                  </div>

                  <div className="axis-center-bar">
                    <div className="axis-half axis-half-left">
                      {barData.winnerSide === "left" && (
                        <div
                          className="axis-fill axis-fill-left"
                          style={{ width: `${barData.fillPercent}%` }}
                        />
                      )}
                    </div>

                    <div className="axis-center-line" />

                    <div className="axis-half axis-half-right">
                      {barData.winnerSide === "right" && (
                        <div
                          className="axis-fill axis-fill-right"
                          style={{ width: `${barData.fillPercent}%` }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="axis-score-row-graph">
                    <span>
                      {axis.left} {scores[axis.left]}
                    </span>
                    <span>
                      {axis.right} {scores[axis.right]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="result-grid">
          <div>
            <h3>강점</h3>
            <ul>
              {result.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>주의할 점</h3>
            <ul>
              {result.cautions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {result.goodMatch && (
          <div className="match-section">
            <h3>잘 맞는 Agent</h3>

            <div className="match-list">
              {result.goodMatch.map((item) => {
                const related = results[item.code];

                return (
                  <div className="match-card good-match" key={item.code}>
                    <div className="match-card-inner">
                      <div className="mini-profile-image-wrap">
                       <img
                        className="mini-profile-image"
                        src={`/images/agents/${item.code}.png`}
                        alt={item.name}
                       />
                      </div>

                      <div className="match-copy">
                        <div className="match-code">{item.code}</div>
                        <strong>{item.name}</strong>
                        {related?.subtitle && (
                          <p className="match-subtitle">{related.subtitle}</p>
                        )}
                        <p>{item.reason}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {result.badMatch && (
          <div className="match-section">
            <h3>살짝 삐걱댈 수 있는 Agent</h3>

            <div className="match-list">
              {result.badMatch.map((item) => {
                const related = results[item.code];

                return (
                  <div className="match-card bad-match" key={item.code}>
                    <div className="match-card-inner">
                      <div className="mini-profile-image-wrap">
                       <img
                        className="mini-profile-image"
                        src={`/images/agents/${item.code}.png`}
                        alt={item.name}
                       />
                  </div>

                      <div className="match-copy">
                        <div className="match-code">{item.code}</div>
                        <strong>{item.name}</strong>
                        {related?.subtitle && (
                          <p className="match-subtitle">{related.subtitle}</p>
                        )}
                        <p>{item.reason}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}



        <p className={`save-status save-status-${saveStatus}`}>
          {saveStatus === "saving" && "결과 저장 중..."}
          {saveStatus === "saved" && "결과가 관리자 시트에 저장되었습니다."}
          {saveStatus === "error" &&
            "결과 저장에 실패했습니다. 관리자에게 알려주세요."}
          {saveStatus === "skipped" &&
            "Google Sheet URL이 아직 연결되지 않았습니다."}
        </p>

        <div className="button-row">
          <button className="secondary-button" onClick={handleRestart}>
            다시하기
          </button>

          <button className="primary-button" onClick={handleShare}>
            결과 공유하기
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
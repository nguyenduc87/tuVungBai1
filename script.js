const questions = [
    { question: "おつかれさまでした nghĩa là gì?", choices: ["Chào buổi tối", "Cảm ơn anh/chị đã vất vả", "Chúc ngủ ngon", "Xin lỗi"], answer: "Cảm ơn anh/chị đã vất vả", hiragana: "おつかれさまでした", userAnswer: null },
    { question: "こんにちは nghĩa là gì?", choices: ["Chào buổi sáng", "Chào buổi tối", "Chào buổi trưa", "Chúc ngủ ngon"], answer: "Chào buổi trưa", hiragana: "こんにちは", userAnswer: null },
    { question: "どうも nghĩa là gì?", choices: ["Cảm ơn", "Xin lỗi", "Tạm biệt", "Chào buổi sáng"], answer: "Cảm ơn", hiragana: "どうも", userAnswer: null },
    { question: "おめでとうございます nghĩa là gì?", choices: ["Xin chào", "Xin lỗi", "Chúc mừng", "Tạm biệt"], answer: "Chúc mừng", hiragana: "おめでとうございます", userAnswer: null },
    { question: "しつれいします nghĩa là gì?", choices: ["Xin lỗi/cho phép tôi vào", "Chào buổi trưa", "Cảm ơn nhiều", "Chúc ngủ ngon"], answer: "Xin lỗi/cho phép tôi vào", hiragana: "しつれいします", userAnswer: null },
    { question: "おやすみなさい nghĩa là gì?", choices: ["Chúc ngủ ngon", "Chào buổi trưa", "Xin lỗi", "Tạm biệt"], answer: "Chúc ngủ ngon", hiragana: "おやすみなさい", userAnswer: null },
    { question: "おさきにしつれいします nghĩa là gì?", choices: ["Xin phép về trước", "Rất vui được gặp bạn", "Cảm ơn anh/chị", "Xin lỗi"], answer: "Xin phép về trước", hiragana: "おさきにしつれいします", userAnswer: null },
    { question: "まだ　わかりません nghĩa là gì?", choices: ["Tôi chưa hiểu", "Tôi hiểu rồi", "Tôi không biết", "Tôi đồng ý"], answer: "Tôi chưa hiểu", hiragana: "まだ　わかりません", userAnswer: null },
    { question: "じゃあ、また nghĩa là gì?", choices: ["Hẹn gặp lại", "Tạm biệt buổi tối", "Xin chào", "Chúc ngủ ngon"], answer: "Hẹn gặp lại", hiragana: "じゃあ、また", userAnswer: null },
    { question: "どうぞ nghĩa là gì?", choices: ["Xin mời", "Xin lỗi", "Chào buổi sáng", "Tạm biệt"], answer: "Xin mời", hiragana: "どうぞ", userAnswer: null },
    { question: "はい nghĩa là gì?", choices: ["Vâng / Đúng rồi", "Không", "Xin lỗi", "Không biết"], answer: "Vâng / Đúng rồi", hiragana: "はい", userAnswer: null },
    { question: "いいえ nghĩa là gì?", choices: ["Không", "Có", "Được rồi", "Xin lỗi"], answer: "Không", hiragana: "いいえ", userAnswer: null },
    { question: "ごめん nghĩa là gì?", choices: ["Xin lỗi (thân mật)", "Cảm ơn", "Chào buổi tối", "Không sao"], answer: "Xin lỗi (thân mật)", hiragana: "ごめん", userAnswer: null },
    { question: "おとしましたよ！ nghĩa là gì?", choices: ["Anh/chị làm rơi đồ rồi!", "Chúc mừng nhé!", "Cảm ơn anh/chị", "Xin lỗi"], answer: "Anh/chị làm rơi đồ rồi!", hiragana: "おとしましたよ！", userAnswer: null },
    { question: "すみません nghĩa là gì?", choices: ["Xin lỗi / Cảm ơn", "Chào buổi sáng", "Hẹn gặp lại", "Không sao"], answer: "Xin lỗi / Cảm ơn", hiragana: "すみません", userAnswer: null },
    { question: "おはようございます nghĩa là gì?", choices: ["Chào buổi sáng", "Chào buổi trưa", "Chào buổi tối", "Chúc ngủ ngon"], answer: "Chào buổi sáng", hiragana: "おはようございます", userAnswer: null },
    { question: "こんばんは nghĩa là gì?", choices: ["Chào buổi tối", "Chào buổi trưa", "Chào buổi sáng", "Chúc ngủ ngon"], answer: "Chào buổi tối", hiragana: "こんばんは", userAnswer: null },
    { question: "わかりますか？ nghĩa là gì?", choices: ["Bạn có hiểu không?", "Bạn khỏe không?", "Bạn đi đâu thế?", "Bạn làm gì vậy?"], answer: "Bạn có hiểu không?", hiragana: "わかりますか？", userAnswer: null },
    { question: "わかりました nghĩa là gì?", choices: ["Tôi hiểu rồi", "Tôi không biết", "Tôi xin lỗi", "Không sao"], answer: "Tôi hiểu rồi", hiragana: "わかりました", userAnswer: null },
    { question: "いたい！ nghĩa là gì?", choices: ["Đau quá!", "Nguy hiểm!", "Nhanh lên!", "Xin lỗi!"], answer: "Đau quá!", hiragana: "いたい！", userAnswer: null },
    { question: "これ nghĩa là gì?", choices: ["Cái này", "Cái kia", "Cái đó", "Cái của tôi"], answer: "Cái này", hiragana: "これ", userAnswer: null },
    { question: "それ nghĩa là gì?", choices: ["Cái đó", "Cái kia", "Cái này", "Cái của bạn"], answer: "Cái đó", hiragana: "それ", userAnswer: null },
    { question: "あれ nghĩa là gì?", choices: ["Cái kia (xa cả hai)", "Cái này", "Cái đó", "Vật của tôi"], answer: "Cái kia (xa cả hai)", hiragana: "あれ", userAnswer: null },
    { question: "あめ nghĩa là gì?", choices: ["Kẹo / Mưa", "Cơm", "Nước", "Bánh"], answer: "Kẹo / Mưa", hiragana: "あめ", userAnswer: null },
    { question: "プレゼント nghĩa là gì?", choices: ["Quà tặng", "Tiệc", "Sinh nhật", "Cảm ơn"], answer: "Quà tặng", hiragana: "プレゼント", userAnswer: null },
    { question: "ありがとうございます nghĩa là gì?", choices: ["Cảm ơn", "Xin lỗi", "Tạm biệt", "Xin mời"], answer: "Cảm ơn", hiragana: "ありがとうございます", userAnswer: null },

    { question: "Xin lỗi (thân mật) là gì?", choices: ["ごめん", "どうも", "すみません", "おめでとうございます"], answer: "ごめん", hiragana: "ごめん", userAnswer: null },
    { question: "Cảm ơn là gì?", choices: ["すみません", "ありがとうございます", "さようなら", "ごめんなさい"], answer: "ありがとうございます", hiragana: "ありがとうございます", userAnswer: null },
    { question: "Chúc ngủ ngon là gì?", choices: ["おはようございます", "こんばんは", "おやすみなさい", "じゃあ、また"], answer: "おやすみなさい", hiragana: "おやすみなさい", userAnswer: null },
    { question: "Xin phép về trước là gì?", choices: ["おつかれさまでした", "おさきにしつれいします", "どうも", "しつれいします"], answer: "おさきにしつれいします", hiragana: "おさきにしつれいします", userAnswer: null },
    { question: "Xin mời là gì?", choices: ["どうぞ", "おはようございます", "こんばんは", "すみません"], answer: "どうぞ", hiragana: "どうぞ", userAnswer: null },
    { question: "Tôi hiểu rồi là gì?", choices: ["わかりました", "まだ　わかりません", "わかりますか？", "はい"], answer: "わかりました", hiragana: "わかりました", userAnswer: null },
    { question: "Chào buổi trưa là gì?", choices: ["おはようございます", "こんにちは", "こんばんは", "じゃあ、また"], answer: "こんにちは", hiragana: "こんにちは", userAnswer: null },
    { question: "Anh/chị làm rơi đồ rồi! là gì?", choices: ["おめでとうございます", "おとしましたよ！", "いたい！", "ごめん"], answer: "おとしましたよ！", hiragana: "おとしましたよ！", userAnswer: null },
    { question: "Chúc mừng là gì?", choices: ["どうぞ", "おめでとうございます", "すみません", "ごめん"], answer: "おめでとうございます", hiragana: "おめでとうございます", userAnswer: null },
    { question: "Xin lỗi / Cảm ơn (lịch sự) là gì?", choices: ["すみません", "ごめん", "どうも", "はい"], answer: "すみません", hiragana: "すみません", userAnswer: null },
    { question: "Hẹn gặp lại là gì?", choices: ["じゃあ、また", "おやすみなさい", "こんにちは", "こんばんは"], answer: "じゃあ、また", hiragana: "じゃあ、また", userAnswer: null },
    { question: "Vâng / Đúng rồi là gì?", choices: ["いいえ", "はい", "まだ　わかりません", "どうも"], answer: "はい", hiragana: "はい", userAnswer: null },
    { question: "Không là gì?", choices: ["いいえ", "はい", "どうも", "わかりました"], answer: "いいえ", hiragana: "いいえ", userAnswer: null },
    { question: "Chào buổi sáng là gì?", choices: ["おはようございます", "こんばんは", "こんにちは", "おやすみなさい"], answer: "おはようございます", hiragana: "おはようございます", userAnswer: null },
    { question: "Chào buổi tối là gì?", choices: ["こんにちは", "こんばんは", "おはようございます", "じゃあ、また"], answer: "こんばんは", hiragana: "こんばんは", userAnswer: null },
    { question: "Cảm ơn anh/chị đã vất vả là gì?", choices: ["おつかれさまでした", "おさきにしつれいします", "しつれいします", "ありがとうございます"], answer: "おつかれさまでした", hiragana: "おつかれさまでした", userAnswer: null },
    { question: "Xin lỗi / cho phép tôi vào là gì?", choices: ["しつれいします", "ごめん", "どうも", "じゃあ、また"], answer: "しつれいします", hiragana: "しつれいします", userAnswer: null },
    { question: "Cảm ơn là gì?", choices: ["どうも", "いいえ", "どうぞ", "はい"], answer: "どうも", hiragana: "どうも", userAnswer: null },
    { question: "Tôi chưa hiểu là gì?", choices: ["まだ　わかりません", "わかりました", "わかりますか？", "いいえ"], answer: "まだ　わかりません", hiragana: "まだ　わかりません", userAnswer: null },
    { question: "Bạn có hiểu không? là gì?", choices: ["わかりますか？", "まだ　わかりません", "わかりました", "はい"], answer: "わかりますか？", hiragana: "わかりますか？", userAnswer: null },
    { question: "Đau quá! là gì?", choices: ["いたい！", "ごめん", "おとしましたよ！", "すみません"], answer: "いたい！", hiragana: "いたい！", userAnswer: null },
    { question: "Cái này là gì?", choices: ["それ", "これ", "あれ", "どれ"], answer: "これ", hiragana: "これ", userAnswer: null },
    { question: "Cái đó là gì?", choices: ["これ", "あれ", "それ", "どれ"], answer: "それ", hiragana: "それ", userAnswer: null },
    { question: "Cái kia (xa cả hai người) là gì?", choices: ["それ", "あれ", "これ", "どれ"], answer: "あれ", hiragana: "あれ", userAnswer: null },
    { question: "Kẹo / Mưa là gì?", choices: ["あめ", "あれ", "これ", "プレゼント"], answer: "あめ", hiragana: "あめ", userAnswer: null },
    { question: "Quà tặng là gì?", choices: ["プレゼント", "どうも", "あめ", "おめでとうございます"], answer: "プレゼント", hiragana: "プレゼント", userAnswer: null },
];

// Hàm xáo trộn mảng theo thuật toán Fisher-Yates
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Gọi hàm này trước khi hiển thị câu hỏi
shuffleQuestions(questions);

let currentQuestion = 0;
let timer;
let timeRemaining = 7;
const feedback = document.getElementById("feedback");
const warning = document.getElementById("warning");

function loadQuestion() {
    document.querySelector(".quiz-container").style.opacity = 0;
    feedback.style.display = "none";
    setTimeout(() => {
        const question = questions[currentQuestion];
        document.getElementById("question").textContent = question.question;
        const choicesList = document.getElementById("choices");
        choicesList.innerHTML = '';

        // Tạo bản sao của mảng đáp án rồi xáo trộn
        let shuffledChoices = [...question.choices];
        shuffleQuestions(shuffledChoices);

        shuffledChoices.forEach(choice => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.onclick = () => checkAnswer(choice, li);
            choicesList.appendChild(li);
        });

        timeRemaining = 7;
        document.getElementById("timer").textContent = timeRemaining;
        startTimer();

        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "none";
        warning.style.display = "none";

        document.querySelector(".quiz-container").style.opacity = 1;
    }, 300);
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("timer").textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            // Vô hiệu hóa tất cả các đáp án
            const choices = document.querySelectorAll("#choices li");
            choices.forEach(choice => {
                choice.onclick = null;
            });
            document.getElementById("nextButton").style.display = "inline-block";
            if (questions[currentQuestion].userAnswer === null) {
                warning.style.display = "block";
                return;
            }
        }
    }, 1000);
}

function checkAnswer(selected, liElement) {
    const question = questions[currentQuestion];
    const choices = document.querySelectorAll(".choices li");

    question.userAnswer = selected;
    choices.forEach(choice => {
        if (choice.textContent === question.answer) {
            choice.classList.add("correct");
        } else if (choice.textContent === selected) {
            choice.classList.add("incorrect");
        }
    });

    // choices.forEach(choice => {
    //     choice.onclick = null;
    // });

    clearInterval(timer);

    feedback.style.display = "block";
    feedback.innerHTML = `Phiên âm Hiragana: <strong>${question.hiragana}</strong>`;
    warning.style.display = "none";

    document.getElementById("nextButton").style.display = "inline-block";

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "inline-block";
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("submitButton").style.display = "inline-block";
    }
}

function submitQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 0;

    questions.forEach(question => {
        if (question.userAnswer === question.answer) {
            correctAnswers++;
        } else if (question.userAnswer !== null) {
            incorrectAnswers++;
        } else {
            unansweredQuestions++;
        }
    });

    document.getElementById("totalQuestions").textContent = questions.length;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("incorrectAnswers").textContent = incorrectAnswers;
    document.getElementById("unansweredQuestions").textContent = unansweredQuestions;

    document.getElementById("nextButton").style.display = "none";
    document.getElementById("submitButton").style.display = "none";

    feedback.style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.opacity = 1;
}

function restartQuiz() {
    questions.forEach(question => question.userAnswer = null);
    currentQuestion = 0;
    loadQuestion();
    document.getElementById("result").style.display = "none";
}

loadQuestion();

 function nextQuestion(nextId) {
  const current = document.querySelector('.question.active');
  if (current) current.classList.remove('active');

  const next = document.getElementById(`q${nextId}`);
  if (next) next.classList.add('active');
}

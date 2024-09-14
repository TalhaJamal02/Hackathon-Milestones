var toggleSkill = document.getElementById('toggle-skill') as HTMLButtonElement
var Skill = document.getElementById('skills') as HTMLElement

toggleSkill.addEventListener('click', () => {
  if (Skill.style.display === 'none') {
    Skill.style.display = 'block'
  }
  else {
    Skill.style.display = 'none'
  }
});
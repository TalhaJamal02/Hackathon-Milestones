var toggleSkill = document.getElementById('toggle-skill');
var Skill = document.getElementById('skills');
toggleSkill.addEventListener('click', function () {
    if (Skill.style.display === 'none') {
        Skill.style.display = 'block';
    }
    else {
        Skill.style.display = 'none';
    }
});

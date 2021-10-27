const LinksSocialMedia = {
  github: 'Lillow',
  youtube: 'channel/UC7zslfVU5JM6h-Pce3TT0WA',
  instagram: 'danillordm19',
  facebook: 'danillo.silva.71271466',
  twitter: 'Danrdm19'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      github.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

// ARROW FUNCTIONS
// () => {}
// argumento => {}
// (argumento1, argumento2) =>{}

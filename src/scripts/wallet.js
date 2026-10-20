(() => {
  const outputContainer = document.getElementById('wallet')
  const walletOutput = document.getElementById('wallet-address')
  const qrCodeOutput = document.getElementById('qr-code')
  const tooltip = document.getElementById('clipboard-tooltip')

  const qrCodeImage = document.createElement('img')
  qrCodeOutput.appendChild(qrCodeImage)

  const showTooltip = () => {
    tooltip.classList.remove('invisible')
    tooltip.classList.add('visible')
    setTimeout(() => {
      tooltip.classList.add('invisible')
      tooltip.classList.remove('visible')
    }, 1000)
  }

  const clipboardListener = event => {
    const text = event.target.innerText
    if (!navigator.clipboard) {
      console.error('Error calling clipboard API: Browser has no clipboard API.')
      return
    }

    navigator.clipboard.writeText(text).then(showTooltip, err => {
      console.error(`Error calling clipboard API: ${err}.`)
    })
  }

  walletOutput.addEventListener('click', clipboardListener)

  const qrCodeListener = event => {
    const name = event.target.innerText
    const wallet = event.target.getAttribute('data-w')
    const imagePath = event.target.getAttribute('data-qr')

    walletOutput.innerText = wallet
    qrCodeImage.src = imagePath
    qrCodeImage.alt = `QR code for the ${name} address`

    outputContainer.classList.remove('invisible')
    outputContainer.classList.add('visible')
    outputContainer.inert = false
  }

  const btns = document.querySelectorAll('[data-w]')
  for (const btn of btns) {
    btn.addEventListener('click', qrCodeListener)
  }
})()

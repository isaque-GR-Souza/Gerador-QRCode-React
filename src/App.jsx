import QRCode from 'qrcode'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GeradorQRcode = () => {
    QRCode.toDataURL(url, {
      width:800,
      margin: 2,
      color: {
        dark: '#000000ff',
        light:'#ffffffff'
      }
    }, (err, url) =>{
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }

return (
  <div className="App">
      <h1>Gerador de QR Code</h1>
      <input type="text" placeholder="Digite a URL do site." 
      value={url}
      onChange={(evt) => setUrl(evt.target.value)}/>
      <button onClick={GeradorQRcode}>Gerar QR Code</button>
      {qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} download="qrcode.png">Download</a>
      </>}
    </div>
  )
}

export default App

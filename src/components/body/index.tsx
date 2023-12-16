import databizLogo from '../../assets/client-databiz.svg'
import audiophileLogo from '../../assets/client-audiophile.svg'
import meet from '../../assets/client-meet.svg'
import maker from '../../assets/client-maker.svg'
import { useState } from 'react'

import ilustration from '../../assets/image-hero-desktop.png'
import {
  BodyContainer,
  InformsContainer,
  LogosClientsContainer,
} from './styles'

export const BodyComponent = () => {
  const [logoClient] = useState([databizLogo, audiophileLogo, meet, maker])

  return (
    <BodyContainer>
      <InformsContainer>
        <h1>
          Make <br /> remote work
        </h1>

        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button>Learn more</button>

        <LogosClientsContainer>
          {logoClient.map((logos, index) => (
            <div key={index}>
              <img src={logos} alt={`logo ${index + 1}`} />
            </div>
          ))}
        </LogosClientsContainer>
      </InformsContainer>

      <div>
        <img src={ilustration} alt="Homem segurando um notebook" width={500} />
      </div>
    </BodyContainer>
  )
}

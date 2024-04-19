import { Filters } from 'components/Filters/Filters';
import { List } from './Home.styled';

export function Home() {
  return (
    <div>
      <h2>Rental Camps</h2>
      <p>
        When renting a Teardrop Freedom camper, you can be completely sure that you will spend your vacation
        unforgettably in complete comfort! There are two full beds in our camp. Roomy mezzanines inside. The kitchen
        uses gas - for cooking and heating water, which is much more profitable and more rational than electricity.
        Water is stored in containers where a pump is installed to supply it to the kitchen. A special tank is installed
        to divert the used water. For furniture, the main attribute in its manufacture is compactness and practicality
        in order to optimize and save living space. To ensure safety during movement, all moving and non-static elements
        are fixed. To provide electricity, a rechargeable battery is installed, an external 220 V network connector,
        which is used to connect at a campsite or near an outlet.
      </p>

      <p>
        <b>Advantages of traveling with a camper:</b>
      </p>
      <List>
        <li>
          Using a camper, you do not pay for hotels, short-term rental housing, do not depend on a specific place, time
          and date, independently determine driving routes, places of stops, rest and visits to various places.
        </li>
        <li>
          Independently make the choice of your desired luggage, companions, pets, any other type of transport, for
          example, a bicycle - all that fits.
        </li>
        <li>
          There are models that allow you to move not only on paved roads, but also on rough terrain and off-road.
        </li>
      </List>
      <p>
        The main advantage is that you are your own boss, and it is the greatest degree of independence and freedom,
        comfort and living conditions create such an attractiveness .
      </p>
    </div>
  );
}

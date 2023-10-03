import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse15Icon } from './Ellipse15Icon.js';
import { Ellipse16Icon } from './Ellipse16Icon.js';
import { Ellipse17Icon } from './Ellipse17Icon.js';
import { FeatherIconArrowUp } from './FeatherIconArrowUp/FeatherIconArrowUp';
import { FeatherIconFile } from './FeatherIconFile/FeatherIconFile';
import { FeatherIconMapPin } from './FeatherIconMapPin/FeatherIconMapPin';
import { FeatherIconPieChart } from './FeatherIconPieChart/FeatherIconPieChart';
import { FeatherIconShoppingCart } from './FeatherIconShoppingCart/FeatherIconShoppingCart';
import { FeatherIconStar } from './FeatherIconStar/FeatherIconStar';
import { FeatherIconThermometer } from './FeatherIconThermometer/FeatherIconThermometer';
import { Group2Icon } from './Group2Icon.js';
import { Group3Icon } from './Group3Icon.js';
import { Group7Icon } from './Group7Icon.js';
import { Group8Icon } from './Group8Icon.js';
import { Group9Icon } from './Group9Icon.js';
import { Group12Icon } from './Group12Icon.js';
import { Group43Icon } from './Group43Icon.js';
import { Heat } from './Heat/Heat';
import { Logo } from './Logo/Logo';
import { Noun_eu_22073601Icon } from './Noun_eu_22073601Icon.js';
import { Noun_expiryDate_12414091Icon } from './Noun_expiryDate_12414091Icon.js';
import { Pain } from './Pain/Pain';
import { Rectangle9Icon } from './Rectangle9Icon.js';
import { Rectangle21Icon } from './Rectangle21Icon.js';
import classes from './Strike.module.css';

interface Props {
  className?: string;
  hide?: {
    shape?: boolean;
    oval?: boolean;
    size?: boolean;
  };
}
/* @figmaId 0:8 */
export const Strike: FC<Props> = memo(function Strike(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.ellipse15}>
        <Ellipse15Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse16}>
        <Ellipse16Icon className={classes.icon3} />
      </div>
      <div className={classes.unnamed}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Одна</span>
          <span className={classes.label2}> </span>
          <span className={classes.label3}>таблетка содержит</span>
        </p>
      </div>
      <div className={classes.unnamed2}>Кофеин</div>
      <div className={classes.unnamed3}>
        Усиливает эффект анальгетиков, устраняет сонливость и чувство усталости, повышает физическую и умственную
        работоспособность
      </div>
      <div className={classes._65}>65 МГ</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.unnamed4}>
        <div className={classes.textBlock}>
          Блокирует циклооксигеназу (ЦОГ) в клетках ЦНС, воздействуя на центры боли и терморегуляции
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.unnamed5}>Парацетамол</div>
      <div className={classes._500}>500 МГ</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon4} />
      </div>
      <div className={classes.ellipse17}>
        <Ellipse17Icon className={classes.icon5} />
      </div>
      <FeatherIconArrowUp />
      <div className={classes.unnamed6}>Наверх</div>
      <Logo
        className={classes.logo}
        classes={{ group2: classes.group2 }}
        swap={{
          group2: (
            <div className={classes.group2}>
              <Group2Icon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.group3}>
        <Group3Icon className={classes.icon6} />
      </div>
      <div className={classes.unnamed7}>
        <div className={classes.textBlock3}>ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. НЕОБХОДИМО ОЗНАКОМИТЬСЯ </div>
        <div className={classes.textBlock4}>С ИНСТРУКЦИЕЙ ПО МЕДИЦИНСКОМУ ПРИМЕНЕНИЮ</div>
      </div>
      <div className={classes.unnamed8}>
        <div className={classes.textBlock5}>Против боли </div>
        <div className={classes.textBlock6}>с первого удара!</div>
      </div>
      <div className={classes.unnamed9}>Комплексный препарат от боли и жара</div>
      <div className={classes.rectangle20}></div>
      <div className={classes.unnamed10}>Подробнее</div>
      <div className={classes.rectangle202}></div>
      <div className={classes.unnamed11}>Где купить</div>
      <FeatherIconMapPin className={classes.featherIconMapPin} classes={{ size: classes.size }} />
      <div className={classes.unnamed12}>Купить онлайн</div>
      <FeatherIconShoppingCart />
      <div className={classes.unnamed13}>Действие</div>
      <FeatherIconThermometer />
      <div className={classes.unnamed14}>Состав</div>
      <FeatherIconPieChart />
      <div className={classes.unnamed15}>Преимущества</div>
      <FeatherIconStar />
      <div className={classes.bowling_ball_and_pins_crashing}></div>
      <div className={classes.image1}></div>
      <div className={classes.rectangle25}></div>
      <div className={classes.unnamed16}>Купить онлайн</div>
      <div className={classes.unnamed17}>Страйк Плюс вы можете купить или заказать онлайн в аптеках АСНА</div>
      <div className={classes.image21}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.unnamed18}>Телефон горячей линии</div>
      <div className={classes.copyright2020XantisPharma11733}>
        <div className={classes.textBlock7}>Copyright © 2020 Xantis Pharma</div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
        <div className={classes.textBlock9}>ООО «КСАНТИС ФАРМА» 117335 г. Москва, Нахимовский проспект, 58</div>
      </div>
      <div className={classes.unnamed19}>Написать нам</div>
      <div className={classes.unnamed20}>Поделиться в соц. сетях</div>
      <div className={classes._74952345611}>+7 (495) 234-56-11</div>
      <div className={classes.infoStrikeRu}>info@strike.ru</div>
      <div className={classes.group9}>
        <Group9Icon className={classes.icon7} />
      </div>
      <div className={classes.rectangle24}></div>
      <div className={classes.group43}>
        <Group43Icon className={classes.icon8} />
      </div>
      <div className={classes.rectangle9}>
        <Rectangle9Icon className={classes.icon9} />
      </div>
      <div className={classes.rectangle26}></div>
      <div className={classes.rectangle28}></div>
      <div className={classes.rectangle27}></div>
      <div className={classes.rectangle29}></div>
      <div className={classes.GMP}>
        <div className={classes.textBlock10}>Препарат производится в Словацкой Республике </div>
        <div className={classes.textBlock11}>на современной производственной площадке </div>
        <div className={classes.textBlock12}>в соответствии с требованиями Европейского стандарта качества GMP</div>
      </div>
      <div className={classes.unnamed21}>
        <div className={classes.textBlock13}>Препарат не влияет на синтез прослагландинов </div>
        <div className={classes.textBlock14}>в переферических тканях, что обуславливает отсутсвие </div>
        <div className={classes.textBlock15}>у него отриицательного влияния на водно-солевой обмен </div>
        <div className={classes.textBlock16}>(не вызывает отеков) и слизистую желудочно-кишечного тракта </div>
        <div className={classes.textBlock17}>(не повреждает ЖКТ)</div>
      </div>
      <div className={classes._3}>
        <div className={classes.textBlock18}>Срок годности препарата 3 года прии </div>
        <div className={classes.textBlock19}>условиии хранения в темном прохладном </div>
        <div className={classes.textBlock20}>месте</div>
      </div>
      <div className={classes.unnamed22}>
        Комплексный препарат от боли и жара обезболивающее + жаропонижающее действие
      </div>
      <div className={classes.unnamed23}>Произведено в Европе</div>
      <div className={classes.unnamed24}>Преимущество</div>
      <div className={classes.unnamed25}>Профиль безопасности</div>
      <div className={classes._21}>2 в 1</div>
      <div className={classes.unnamed26}>Срок годности</div>
      <div className={classes.group7}>
        <Group7Icon className={classes.icon10} />
      </div>
      <div className={classes.noun_EU_22073601}>
        <Noun_eu_22073601Icon className={classes.icon11} />
      </div>
      <div className={classes.group8}>
        <Group8Icon className={classes.icon12} />
      </div>
      <div className={classes.noun_ExpiryDate_12414091}>
        <Noun_expiryDate_12414091Icon className={classes.icon13} />
      </div>
      <div className={classes._121234428}>
        Взрослым (включая пожилых) и детям старше 12 лет обычно назначают по 1-2 таблетки, 3-4 раза в сутки, если
        необходимо. интервал между приемами – не менее 4 часов. Максимальная разовая доза – 2 таблетки, максимальная
        суточная доза – 8 таблеток.
      </div>
      <div className={classes.rectangle21}></div>
      <div className={classes.unnamed27}>Для приема внутрь</div>
      <div className={classes.unnamed28}>Таблетки</div>
      <div className={classes.unnamed29}>Раза в день</div>
      <div className={classes.unnamed30}>Таблеток максимальная разовая доза</div>
      <div className={classes.unnamed31}>
        <div className={classes.textBlock21}>Способ </div>
        <div className={classes.textBlock22}>применения и дозы</div>
      </div>
      <div className={classes._12}>1-2</div>
      <div className={classes._34}>3-4</div>
      <div className={classes._8}>8</div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle203}></div>
      <div className={classes.unnamed32}>инструкция по применению</div>
      <FeatherIconMapPin
        className={classes.featherIconMapPin2}
        hide={{
          shape: true,
          oval: true,
          size: true,
        }}
      />
      <FeatherIconFile />
      <div className={classes.image2}></div>
      <div className={classes.rectangle204}></div>
      <div className={classes.rectangle212}>
        <Rectangle21Icon className={classes.icon14} />
      </div>
      <div className={classes._20}>20 таблеток</div>
      <div className={classes._10}>10 таблеток</div>
      <div className={classes.rectangle3}></div>
      <Heat className={classes.heat} classes={{ rectangle23: classes.rectangle23 }} />
      <Heat className={classes.heat2} classes={{ rectangle23: classes.rectangle232 }} />
      <Pain className={classes.pain} classes={{ rectangle23: classes.rectangle233 }} />
      <Pain className={classes.pain2} classes={{ rectangle23: classes.rectangle234 }} />
      <Pain className={classes.pain3} classes={{ rectangle23: classes.rectangle235 }} />
      <Pain className={classes.pain4} classes={{ rectangle23: classes.rectangle236 }} />
      <Pain className={classes.pain5} classes={{ rectangle23: classes.rectangle237 }} />
      <div className={classes.unnamed33}>Болеутоляющее действие</div>
      <div className={classes.unnamed34}>Жаропонижающее действие</div>
      <div className={classes.unnamed35}>
        <div className={classes.textBlock23}>Головные боли </div>
        <div className={classes.textBlock24}>и мигрени</div>
      </div>
      <div className={classes._2}>02</div>
      <div className={classes._7}>07</div>
      <div className={classes._32}>03</div>
      <div className={classes._4}>04</div>
      <div className={classes._5}>05</div>
      <div className={classes._1}>01</div>
      <div className={classes._6}>06</div>
      <div className={classes.image11}></div>
      <div className={classes.unnamed36}>Зубная боль</div>
      <div className={classes.image17}></div>
      <div className={classes.unnamed37}>Боли в горле</div>
      <div className={classes.image18}></div>
      <div className={classes.unnamed38}>Боли в пояснице</div>
      <div className={classes.unnamed39}>Болезненные менструации, дисменорея</div>
      <div className={classes.image19}></div>
      <div className={classes.image20}></div>
      <div className={classes.unnamed40}>Для снижения повышенной температуры тела при:</div>
      <div className={classes.unnamed41}>Острых распираторных вирусных заболеваний</div>
      <div className={classes.unnamed42}>После проведения вакциинации</div>
      <div className={classes.image9}></div>
      <div className={classes.image10}></div>
      <div className={classes.unnamed43}>и другие</div>
    </div>
  );
});

import React from 'react'
import './style.scss'

export const RulesPage = (): JSX.Element => (
  <div className="rules rulesPageBackground">
    <div className="rules__title">ПРАВИЛА</div>
    <div className="rules__divider"></div>
    <div className="rules__content">
      <div className="rules_text-indent">
        Игра в 15, пятнашки, такен — популярная головоломка, придуманная в 1878
        году Ноем Чепмэном. Головоломка представляет собой набор из 15
        одинаковых квадратных частей (фрагментов) с нанесёнными на них числами,
        лежащих в квадратном игровом поле. Длина стороны игрового поля в четыре
        раза больше длины стороны фрагмента, поэтому в игровом поле остаётся
        незаполненным одно место.
      </div>
      <div className="rules_text-indent">
        Цель игры — упорядочить фрагменты по возрастанию номеров, перемещая их
        внутри игрового поля, желательно сделав как можно меньше перемещений за
        наименьшее количество времени.
      </div>
    </div>
  </div>
)

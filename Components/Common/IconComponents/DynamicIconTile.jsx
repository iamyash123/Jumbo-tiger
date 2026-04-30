import React from 'react'
import ApproachIconTile from '@/Components/Common/IconComponents/ApproachIconTile'
import ArrowUpRightIconTile from '@/Components/Common/IconComponents/ArrowUpRightIconTile'
import BarsIconTile from '@/Components/Common/IconComponents/BarsIconTile'
import BankIconTile from '@/Components/Common/IconComponents/BankIconTile'
import CalendarIconTile from '@/Components/Common/IconComponents/CalendarIconTile'
import CircleGridIconTile from '@/Components/Common/IconComponents/CircleGridIconTile'
import ClockIconTile from '@/Components/Common/IconComponents/ClockIconTile'
import CursorTargetIconTile from '@/Components/Common/IconComponents/CursorTargetIconTile'
import DatabaseIconTile from '@/Components/Common/IconComponents/DatabaseIconTile'
import DocumentIconTile from '@/Components/Common/IconComponents/DocumentIconTile'
import DollarIconTile from '@/Components/Common/IconComponents/DollarIconTile'
import EyeOffIconTile from '@/Components/Common/IconComponents/EyeOffIconTile'
import GraduateIconTile from '@/Components/Common/IconComponents/GraduateIconTile'
import GridIconTile from '@/Components/Common/IconComponents/GridIconTile'
import HouseIconTile from '@/Components/Common/IconComponents/HouseIconTile'
import IconTile from '@/Components/Common/IconComponents/IconTile'
import LightningIconTile from '@/Components/Common/IconComponents/LightningIconTile'
import PhoneIconTile from '@/Components/Common/IconComponents/PhoneIconTile'
import ProfileCardIconTile from '@/Components/Common/IconComponents/ProfileCardIconTile'
import ResultIconTile from '@/Components/Common/IconComponents/ResultIconTile'
import SquaresIconTile from '@/Components/Common/IconComponents/SquaresIconTile'
import SuitcaseIconTile from '@/Components/Common/IconComponents/SuitcaseIconTile'
import WrenchIconTile from '@/Components/Common/IconComponents/WrenchIconTile'

const iconTiles = {
    approach: ApproachIconTile,
    arrow: ArrowUpRightIconTile,
    arrowUpRight: ArrowUpRightIconTile,
    bars: BarsIconTile,
    bank: BankIconTile,
    calendar: CalendarIconTile,
    circleGrid: CircleGridIconTile,
    clock: ClockIconTile,
    cursorTarget: CursorTargetIconTile,
    database: DatabaseIconTile,
    document: DocumentIconTile,
    dollar: DollarIconTile,
    eyeOff: EyeOffIconTile,
    graduate: GraduateIconTile,
    grid: GridIconTile,
    house: HouseIconTile,
    icon: IconTile,
    lightning: LightningIconTile,
    phone: PhoneIconTile,
    profileCard: ProfileCardIconTile,
    result: ResultIconTile,
    squares: SquaresIconTile,
    suitcase: SuitcaseIconTile,
    wrench: WrenchIconTile,
}

const DynamicIconTile = ({ icon, fallback = null }) => {
    if (!icon) return fallback

    if (typeof icon === 'string') {
        const IconComponent = iconTiles[icon]

        if (IconComponent) {
            return <IconComponent />
        }

        return (
            <span
                className="inline-flex shrink-0 items-center justify-center"
                dangerouslySetInnerHTML={{ __html: icon }}
            />
        )
    }

    const IconComponent = iconTiles[icon.name]

    if (!IconComponent) return fallback

    return <IconComponent {...(icon.props || {})} />
}

export default DynamicIconTile

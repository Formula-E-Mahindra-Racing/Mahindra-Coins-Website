import ChatIcon from "@/components/icons/ChatIcon";
import StoreIcon from "@/components/icons/StoreIcon";
import TrophyIcon from "@/components/icons/TrophyIcon";
import { InfoSection } from "@/types/HomeInfo";

export const INFOS: InfoSection[] = [
    {
        title: 'Participate in Forums',
        subTitle: 'Engage in discussions and earn coins for valuable contributions.',
        Icon: ChatIcon,
    },
    {
        title: 'Shop in Our Store',
        subTitle: 'Get cashback in Mahindra Coins on your purchases.',
        Icon: StoreIcon,
    },
    {
        title: 'Bet on Races',
        subTitle: 'Place bets on Mahindra racing events and win coins.',
        Icon: TrophyIcon,
    },
]

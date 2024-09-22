
// To user
interface Texts {
    text: 'Account' | 'Notifications' | 'Privacy' | 'Help & Support' | 'Terms & Conditions'
}

// To reference
export type Values = 'account' | 'notifications' | 'privacy' | 'help' | 'terms'

export interface SettingsTabs extends Texts {
    value: Values
}

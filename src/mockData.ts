export type AppPageId = 'trade' | 'portfolio' | 'explore' | 'settings'

export type PageStat = {
  label: string
  value: string
  detail: string
}

export type PageRow = {
  label: string
  value: string
  meta?: string
  numeric?: boolean
}

export type PageSection = {
  eyebrow: string
  title: string
  rows: PageRow[]
}

export type PageModel = {
  eyebrow: string
  title: string
  body: string
  stats: PageStat[]
  sections: PageSection[]
}

export const recentActivity = [
  { id: 'deposit-1', label: 'Deposit', time: '3 mins ago', amount: '$12K' },
  { id: 'deposit-2', label: 'Deposit', time: '30 mins ago', amount: '$8.4K' },
  { id: 'open-long', label: 'Open Long', time: '40 mins ago', amount: '$3.2K' },
  { id: 'withdraw', label: 'Withdraw', time: '2 days ago', amount: '$1.5K' },
]

export const pillItems = [
  { id: 'trade', label: 'Trade', icon: 'trade' },
  { id: 'portfolio', label: 'Portfolio', icon: 'portfolio' },
  { id: 'explore', label: 'Explore', icon: 'explore' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
] as const

export const utilityItems = [
  { id: 'chart', label: 'Chart', icon: 'chart' },
  { id: 'timer', label: 'Timer', icon: 'timer' },
  { id: 'wallet', label: 'Wallet', icon: 'wallet' },
  { id: 'user', label: 'User', icon: 'user' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
]

export const accountByPage: Record<AppPageId, { balance: string; status: string; banner: string }> = {
  trade: { balance: '4,544', status: 'Trading Live', banner: 'Orders Settled' },
  portfolio: { balance: '18,240', status: 'Allocation Synced', banner: 'PnL Updated' },
  explore: { balance: '6,120', status: 'Market Open', banner: 'Watchlist Live' },
  settings: { balance: '4,544', status: 'Security Healthy', banner: '2FA Enabled' },
}

export const pageById: Record<AppPageId, PageModel> = {
  trade: {
    eyebrow: 'Execution workspace',
    title: 'Trade',
    body:
      'Monitor buying power, open risk, and latest fills in the same chrome that persists across the rest of the product.',
    stats: [
      { label: 'Buying Power', value: '$184,200', detail: 'Available now' },
      { label: 'Open Risk', value: '$12,480', detail: 'Across 4 positions' },
      { label: 'Day PnL', value: '+$3,240', detail: 'Marked to market' },
    ],
    sections: [
      {
        eyebrow: 'Execution',
        title: 'Open Orders',
        rows: [
          { label: 'BTC Perp Long', value: '2.40 BTC', meta: 'Limit 68,420', numeric: true },
          { label: 'SOL Swing Add', value: '850 SOL', meta: 'Trigger 182.40', numeric: true },
          { label: 'NVDA Trim', value: '120 sh', meta: 'Limit 936.00', numeric: true },
        ],
      },
      {
        eyebrow: 'Tape',
        title: 'Recent Fills',
        rows: [
          { label: 'BTC Partial', value: '+$1,280', meta: 'Filled 14:02', numeric: true },
          { label: 'ETH Hedge', value: '−$320', meta: 'Filled 13:47', numeric: true },
          { label: 'SOL Momentum', value: '+$540', meta: 'Filled 13:22', numeric: true },
        ],
      },
    ],
  },
  portfolio: {
    eyebrow: 'Capital overview',
    title: 'Portfolio',
    body:
      'Track allocation, concentrated exposure, and performance snapshots without losing the persistent account chrome.',
    stats: [
      { label: 'Net Liquidation', value: '$412,880', detail: 'Across all books' },
      { label: '7D Return', value: '+4.8%', detail: 'Net of fees' },
      { label: 'Cash Weight', value: '18%', detail: 'Dry powder' },
    ],
    sections: [
      {
        eyebrow: 'Holdings',
        title: 'Top Positions',
        rows: [
          { label: 'BTC', value: '$148,220', meta: '35.9% of book', numeric: true },
          { label: 'NVDA', value: '$96,440', meta: '23.4% of book', numeric: true },
          { label: 'COIN', value: '$54,180', meta: '13.1% of book', numeric: true },
        ],
      },
      {
        eyebrow: 'Risk',
        title: 'Allocation Notes',
        rows: [
          { label: 'Tech Equities', value: '41%', meta: 'Beta-heavy sleeve', numeric: true },
          { label: 'Crypto', value: '44%', meta: 'Core directional risk', numeric: true },
          { label: 'Cash + Hedging', value: '15%', meta: 'Protective reserve', numeric: true },
        ],
      },
    ],
  },
  explore: {
    eyebrow: 'Market discovery',
    title: 'Explore',
    body:
      'Surface fresh setups, sector rotation, and symbols worth promoting into the trade workflow without changing the shell.',
    stats: [
      { label: 'Watchlist Movers', value: '12', detail: 'Above 2% today' },
      { label: 'High Conviction', value: '4', detail: 'Passing filters' },
      { label: 'Sector Breadth', value: '63%', detail: 'Risk-on skew' },
    ],
    sections: [
      {
        eyebrow: 'Watchlist',
        title: 'Candidates',
        rows: [
          { label: 'SOL', value: '+7.2%', meta: 'Momentum + volume spike', numeric: true },
          { label: 'COIN', value: '+3.8%', meta: 'Breakout from range', numeric: true },
          { label: 'SHOP', value: '+2.9%', meta: 'Relative strength leader', numeric: true },
        ],
      },
      {
        eyebrow: 'Themes',
        title: 'Market Rotation',
        rows: [
          { label: 'AI Infrastructure', value: 'Leading', meta: 'NVDA / AMD / AVGO' },
          { label: 'Exchange Beta', value: 'Improving', meta: 'COIN / HOOD' },
          { label: 'Rates Sensitivity', value: 'Mixed', meta: 'Macro still noisy' },
        ],
      },
    ],
  },
  settings: {
    eyebrow: 'Profile and security',
    title: 'Settings',
    body:
      'Keep security, transfer controls, and workflow preferences in the same chrome so the product feels persistent, not page-fragmented.',
    stats: [
      { label: '2FA', value: 'Enabled', detail: 'Authenticator app' },
      { label: 'Sessions', value: '3', detail: 'All recognized' },
      { label: 'Alerts', value: '9', detail: 'Critical only' },
    ],
    sections: [
      {
        eyebrow: 'Security',
        title: 'Controls',
        rows: [
          { label: 'Withdrawal Lock', value: 'On', meta: '24 hour cooldown' },
          { label: 'Device Verification', value: 'Required', meta: 'Every new machine' },
          { label: 'API Keys', value: '2 Active', meta: 'Scoped permissions', numeric: true },
        ],
      },
      {
        eyebrow: 'Preferences',
        title: 'Notifications',
        rows: [
          { label: 'Liquidation Alerts', value: 'Enabled', meta: 'Push + email' },
          { label: 'Fill Confirmations', value: 'Enabled', meta: 'Real-time' },
          { label: 'Weekly Summary', value: 'Paused', meta: 'Re-enable any time' },
        ],
      },
    ],
  },
}

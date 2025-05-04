# LinkedIn Automation Tools

A collection of browser-based automation scripts for LinkedIn to help manage your connections and blocked members.

## Features

- **Connection Request Acceptor**: Automatically accept all pending LinkedIn connection requests
- **Member Unblocker**: Automatically unblock all blocked members on your LinkedIn account

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/linkedin-tools.git
cd linkedin-tools
```

## Usage

### Accepting Connection Requests

1. Log in to your LinkedIn account
2. Navigate to your connection requests page
3. Open your browser's developer console (F12 or right-click -> Inspect)
4. Copy and paste the contents of `requests-acceptor.js` into the console
5. Press Enter to run the script

The script will:

- Find all pending connection requests
- Automatically accept them one by one
- Wait 1 second between each acceptance to avoid rate limiting
- Log progress in the console

### Unblocking Members

1. Log in to your LinkedIn account
2. Navigate to your blocked members page
3. Open your browser's developer console (F12 or right-click -> Inspect)
4. Copy and paste the contents of `unblock-all.js` into the console
5. Press Enter to run the script

The script will:

- Find all blocked members
- Click the unblock button for each member
- Enter your password when prompted
- Wait between actions to avoid rate limiting
- Log progress in the console

## Important Notes

- These scripts are meant to be run in your browser's console
- Make sure you're logged in to LinkedIn before running the scripts
- The scripts include delays to avoid triggering LinkedIn's rate limiting
- Use these tools responsibly and in accordance with LinkedIn's terms of service
- You may need to modify the password in `unblock-all.js` before running it

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

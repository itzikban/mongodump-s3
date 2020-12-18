"""Module implements various notification methods."""

import os
import smtplib
import requests
from email.message import EmailMessage


class TelegramNotifications:
    """Sends notifications using Telegram API.

    Attributes:
        token: bot token that will be used to send notifications
        chat_id: id of the chat where notifications will be send
    """

    def __init__(self, token, chat_id):  # FIXME
        """Initializes TelegramNotifications with token and chat_id."""
        # FIXME
        # self.token = os.getenv('TELEGRAM_TOKEN')
        # self.chat_id = os.getenv('TELEGRAM_CHAT_ID')
        self.token = token  # FIXME
        self.chat_id = chat_id  # FIXME
        self.telegram_send_message = send_message = f'https://api.telegram.org/bot{self.token}/sendMessage'

    def send_msg(self, message: str) -> None:
        """Send messages using Telegram API calls.

        Arguments:
            message: str, text that will be send to the target user

        Returns:
            None
        """
        text_body = {'chat_id': self.chat_id, 'text': message}
        requests.post(self.telegram_send_message, text_body).json()


class EmailNotifications:
    """Sends notifications using SMTP relay.

    Attributes:
    """

    def __init__(self, recipient):  # FIXME
        """Initializes EmailNotification with SMTP relay server and recipient email."""
        self.smtp_server = os.getenv('SMTP_RELAY')
        if self.smtp_server is None:
            self.smtp_server = 'localhost'
        self.recipient = os.getenv('EMAIL')
        # FIXME remove later
        if self.recipient is None:
            self.recipient = recipient

    def send_email(self, text: str) -> None:
        """Sends given text body as an email.

        Attributes:
            text: string, emails text body.

        Returns:
            None
        """
        msg = EmailMessage()
        msg['Subject'] = '\U0001F4D1 [mongo-dump] status report'
        msg['From'] = 'mongo-dump@service.io'
        msg['To'] = self.recipient
        msg.set_content(text)
        with smtplib.SMTP(self.smtp_server) as smtp:
            smtp.send_message(msg)
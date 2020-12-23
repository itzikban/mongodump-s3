
"""Module implements various notification methods."""

import os
import smtplib
import logging
from socket import gaierror
from email.message import EmailMessage
from requests import post
from .helpers import env_exists, log

log()


class Notifications:

    """
    Handles notifications requests.

    Attributes:
        message: str, plain text msg that will be send
    """

    def __init__(self, message: str):
        """Initializes class Notifications."""
        self.message = message

    def send_telegram_notification(self) -> bool:
        """"
        Handler for Telegram notifications.

        Returns:
            Fail: if no env variables were provided
            True: if environment values exists and msg was sent
        """
        telegram_chat_id = os.getenv('TELEGRAM_CHAT_ID')
        telegram_token = os.getenv('TELEGRAM_TOKEN')

        if env_exists(telegram_chat_id) and env_exists(telegram_token):
            telegram_send_message = f'https://api.telegram.org/bot{telegram_token}/sendMessage'
            text_body = {'chat_id': telegram_chat_id, 'text': self.message}
            try:
                post(telegram_send_message, text_body).json()
                logging.info('Telegram notification sent to "%s".', telegram_chat_id)
                return True
            except ConnectionError as error_response:
                details = str(error_response).split(':')[0]
                logging.error(details)
        return False

    @staticmethod
    def email_handler(recipient, smtp_server, message):
        """
        Sends given text body as an email.

        Attributes:
            recipient: str, email address to notify
            smtp_server: str, relay server that email requests
            message: str, plain text message that will be sent

        Returns:
            None
        """
        msg = EmailMessage()
        msg['Subject'] = '\U0001F4D1 [mongo-dump] status report'
        msg['From'] = 'mongo-dump@service.io'
        msg['To'] = recipient
        msg.set_content(message)
        with smtplib.SMTP(smtp_server) as smtp:
            smtp.send_message(msg)

    def send_email_notification(self) -> bool:
        """
        Handler for Email notifications

        Returns:
            Fail: if no env variables were provided
            True: if environment values exists and msg was sent
        """
        email = os.getenv('EMAIL')
        smtp_relay = os.getenv('SMTP_RELAY')

        if env_exists(email):
            if not env_exists(smtp_relay):
                smtp_relay = 'localhost'
            try:
                self.email_handler(email, smtp_relay, self.message)
                logging.info('Email was sent to "%s" via smtp relay "%s"',
                             email, smtp_relay)
                return True
            except gaierror:
                logging.error('smtp relay server "%s" is not available. Please check.',
                              smtp_relay)

        return False

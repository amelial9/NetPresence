from pypresence import Presence
import time
import os
from dotenv import load_dotenv
load_dotenv()

client_id = os.getenv("DISCORD_CLIENT_ID")
RPC = Presence(client_id)
RPC.connect()

RPC.update(
    state="vibing 🪩",
    details="Amelia is testing Rich Presence",
    start=time.time()
)

print("Presence set! Check your Discord profile.")

time.sleep(300)

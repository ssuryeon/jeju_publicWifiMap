import requests
import json

key = "2r32c3e295t554errcp4c4tjb9bebpc1"
all_data = []
page = 1
has_more = True 
while has_more:
    url = f"https://open.jejudatahub.net/api/proxy/Dtb18ta1btbD1Da1a81aaDttab6tDabb/{key}?baseDate=20241001&number={page}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        all_data.extend(data.get('data', [])) 
        has_more = data.get('hasMore', False) 
        page += 1  
    else:
        print(f"Failed to retrieve data on page {page}: {response.status_code}")
        break
with open(f'all_data.json', 'w', encoding='utf-8') as json_file:
    json.dump(all_data, json_file, ensure_ascii=False, indent=4)

print("All data saved to 'all_data.json'")

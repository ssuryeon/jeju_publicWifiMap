import json
import os


input_file_path = 'all_data.json'
categories = ['공원', '관광지', '버스정류소', '의료시설', '체육시설', '해변', '공항/터미널/대합실', '올레코스', '전통시장', '한라산', '공공기관', '문화시설', '복지시설', '숲길', '전기차충전소', '테마거리']
category_data = {category: [] for category in categories}


with open(input_file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)  


for item in data:
    category = item.get('category')
    if category in category_data:
        category_data[category].append(item)  

for category, items in category_data.items():
    if items:  
        safe_category = category.replace('/', '_')
        output_file_path = os.path.join(os.getcwd(), f'{safe_category}.json')
        
        with open(output_file_path, 'w', encoding='utf-8') as f:
            json.dump(items, f, ensure_ascii=False, indent=4)

print("카테고리별 파일 생성 완료")


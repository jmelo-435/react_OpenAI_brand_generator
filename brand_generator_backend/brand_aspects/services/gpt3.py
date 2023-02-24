import openai
import os
import json

openai.api_key = os.environ["OPENAI_API_KEY"]

def generate_brand(business_info):
    if business_info["description"] =="" and business_info["name"]=="":
        brand= _generate_brand_name_and_description(business_info)
        font_and_colors = _generate_brand_font_and_colors(business_info)
        return {"name":brand['name'],"slogan":brand['slogan'],"achronym":brand['acronym'],"color_scheme":font_and_colors['colors'], "description":brand['description'],"font":font_and_colors['font']}

    if business_info["description"] !="" and business_info["name"]=="":
        brand= _generate_brand_name(business_info)
        font_and_colors = _generate_brand_font_and_colors(business_info)
        return {"name":brand['name'],"slogan":brand['slogan'],"achronym":brand['acronym'],"color_scheme":font_and_colors['colors'], "description":business_info["description"],"font":font_and_colors['font']}

    if business_info["description"] =="" and business_info["name"]!="":
        brand= _generate_brand_description(business_info)
        font_and_colors = _generate_brand_font_and_colors(business_info)
        return {"name":business_info['name'],"slogan":brand['slogan'],"achronym":brand['acronym'],"color_scheme":font_and_colors['colors'], "description":brand["description"],"font":font_and_colors['font']}
    if business_info["description"] !="" and business_info["name"]!="":
        brand= _generate_brand_slogan(business_info)
        font_and_colors = _generate_brand_font_and_colors(business_info)
        return {"name":business_info['name'],"slogan":brand['slogan'],"achronym":brand['acronym'],"color_scheme":font_and_colors['colors'], "description":business_info["description"],"font":font_and_colors['font']}

def _generate_brand_name_and_description(business_info):
    def _generate_brand_name_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        business_type=business_info["type"]
        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
        return f"""Sugest a name, an acronym, a slogan and a description with 20 to 30 words for a business that is a {business_type} related to  {keywords}.They must be  {atributes}. Return as a JSON string. Ex:{{"name":"Busines Generator","slogan":"","description":""}}"""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_name_prompt(business_info),
            temperature=0.7,
            presence_penalty=1.5,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])

def _generate_brand_name(business_info):
    def _generate_brand_name_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        business_type=business_info["type"]
        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
        return f"""Sugest a name, an acronym and a slogan for a business that is a {business_type} related to  {keywords}.They must be  {atributes}. Return as a JSON string. Ex:{{"name":"Busines Generator","slogan":"","acronym":"BG"}}"""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_name_prompt(business_info),
            temperature=0.7,
            presence_penalty=1.5,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])

def _generate_brand_description(business_info):
    def _generate_brand_name_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        business_type=business_info["type"]
        name = business_info['name']
        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
    
        return f"""Create a description with 20 to 30 words, an acronym and a slogan for a {business_type} called {name} related to  {keywords}.They must be  {atributes}. Return as a JSON string. Ex:{{"description":"","slogan":"","acronym":"BG"}}"""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_name_prompt(business_info),
            temperature=0.7,
            presence_penalty=1.5,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])

def _generate_brand_slogan(business_info):
    def _generate_brand_name_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        business_type=business_info["type"]
        name = business_info['name']
        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
    
        return f"""Create an acronym and a slogan for a {business_type} called {name} related to  {keywords}.They must be  {atributes}. Return as a JSON string. Ex:{{"slogan":"","acronym":"BG"}}"""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_name_prompt(business_info),
            temperature=0.7,
            presence_penalty=1.5,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])


def _generate_brand_font_and_colors(business_info):
    def _generate_brand_font_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
        return f"""Sugest a Google Font,except Roboto, and a color scheme of 4 colors for the logo of a business related to  {keywords}.The font must be  {atributes}.Return as a JSON string.Ex:{{"font":"Arial","colors":["#fffff","#000000"]}}."""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_font_prompt(business_info),
            temperature=0.7,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])
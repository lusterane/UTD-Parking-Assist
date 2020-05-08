'''
Author: Toby Chow, Jin Liu, Richard Lin
Description: End point lambda function for Amazon Alexa Skill "Spot Finder"
'''
from Crawl_Parking_Structures import CrawlRoot
intent_lst = ["purple", "orange", "gold", "green", "red", "grey", "visitor"]
cr = CrawlRoot()
cr.find_parking()
intent_dict = cr.intent_dict

def lambda_handler(event, context):
    if event['session']['new']:
        on_start()
    if event['request']['type'] == "LaunchRequest":
        return on_launch(event)
    elif event['request']['type'] == "IntentRequest":
        return intent_scheme(event)
    elif event['request']['type'] == "SessionEndedRequest":
        return on_end()


def on_start():
    print("Session Started.")

def on_launch(event):
    onlaunch_MSG = "Hi, what color parking permit do you have?"
    reprompt_MSG = "Do you have purple, orange, gold, or green permit? Or you want to use pay spots?"
    card_TEXT = "What is your color permit?"
    card_TITLE = "Permit Color"
    return output_json_builder_with_reprompt_and_card(onlaunch_MSG, card_TEXT, card_TITLE, reprompt_MSG, False)

def on_end():
    print("Session Ended.")



def intent_scheme(event):
    intent_name = event['request']['intent']['name']
    if intent_name in intent_lst:
        return intenthandler(event, intent_name)
    elif intent_name == 'invalid':
        return errorhandler(event)
    elif intent_name in ["AMAZON.NoIntent", "AMAZON.StopIntent", "AMAZON.CancelIntent"]:
        return stop_the_skill(event)
    elif intent_name == "AMAZON.HelpIntent":
        return assistance(event)
    elif intent_name == "AMAZON.FallbackIntent":
        return fallback_call(event)
    else:
        return errorhandler(event)


def intenthandler(event, intent_name):
    if intent_name == "red" or intent_name == "visitor":
        MSG = intent_dict[intent_name]
    else:
        if intent_name == "grey":
            intent_name = "pay-by-space"
        num1 = int(intent_dict[intent_name]["parking structure 1"])
        num3 = int(intent_dict[intent_name]["parking structure 3"])
        num4 = int(intent_dict[intent_name]["parking structure 4"])
        MSG = "Based on you permit, there are " + str(num1) + " spots in parking structure 1, " + str(num3) + " spots in parking structure 3, "+ str(num4) + " spots available in parking structure 4. "
        if num1 == max(num1,num3,num4):
            MSG += "I suggest you go to parking structure 1."
        elif num3 == max(num1,num3,num4):
            MSG += "I suggest you go to parking structure 3."
        else:
            MSG += "I suggest you go to parking structure 4."
    reprompt_MSG = "Do you want to hear the number of spots available for " + intent_name + " permit?"
    card_TEXT = "you've picked " + intent_name.lower()
    card_TITLE = "you've picked " + intent_name.lower()
    return output_json_builder_with_reprompt_and_card(MSG, card_TEXT, card_TITLE, reprompt_MSG, False)

def errorhandler(event):
    wrongname_MSG = "Sorry I do not understand. You can say purple, orange, gold, or green permit? Or you want to use pay spots?"
    reprompt_MSG = "Do you have purple, orange, gold, or green permit? Or you want to use pay spots?"
    card_TEXT = "Do you have purple, orange, gold, or green permit? Or you want to use pay spots?"
    card_TITLE = "Wrong input."
    return output_json_builder_with_reprompt_and_card(wrongname_MSG, card_TEXT, card_TITLE, reprompt_MSG, False)


def stop_the_skill(event):
    stop_MSG = "Thank you. Bye!"
    reprompt_MSG = ""
    card_TEXT = "Bye."
    card_TITLE = "Bye Bye."
    return output_json_builder_with_reprompt_and_card(stop_MSG, card_TEXT, card_TITLE, reprompt_MSG, True)

def assistance(event):
    assistance_MSG = "Do you have purple, orange, gold, or green permit? Or you want to use pay spots?"
    reprompt_MSG = "Do you have purple, orange, gold, or green permit? Or you want to use pay spots??"
    card_TEXT = "Purple, orange, gold, green permit? Or pay spots?"
    card_TITLE = "Help"
    return output_json_builder_with_reprompt_and_card(assistance_MSG, card_TEXT, card_TITLE, reprompt_MSG, False)

def fallback_call(event):
    fallback_MSG = "I can't help you with that, try rephrasing the question or ask for help by saying HELP."
    reprompt_MSG = "Do you want to hear more?"
    card_TEXT = "You've asked a wrong question."
    card_TITLE = "Wrong question."
    return output_json_builder_with_reprompt_and_card(fallback_MSG, card_TEXT, card_TITLE, reprompt_MSG, False)



def plain_text_builder(text_body):
    text_dict = {}
    text_dict['type'] = 'PlainText'
    text_dict['text'] = text_body
    return text_dict

def reprompt_builder(repr_text):
    reprompt_dict = {}
    reprompt_dict['outputSpeech'] = plain_text_builder(repr_text)
    return reprompt_dict

def card_builder(c_text, c_title):
    card_dict = {}
    card_dict['type'] = "Simple"
    card_dict['title'] = c_title
    card_dict['content'] = c_text
    return card_dict

def response_field_builder_with_reprompt_and_card(outputSpeach_text, card_text, card_title, reprompt_text, value):
    speech_dict = {}
    speech_dict['outputSpeech'] = plain_text_builder(outputSpeach_text)
    speech_dict['card'] = card_builder(card_text, card_title)
    speech_dict['reprompt'] = reprompt_builder(reprompt_text)
    speech_dict['shouldEndSession'] = value
    return speech_dict

def output_json_builder_with_reprompt_and_card(outputSpeach_text, card_text, card_title, reprompt_text, value):
    response_dict = {}
    response_dict['version'] = '1.0'
    response_dict['response'] = response_field_builder_with_reprompt_and_card(outputSpeach_text, card_text, card_title, reprompt_text, value)
    return response_dict

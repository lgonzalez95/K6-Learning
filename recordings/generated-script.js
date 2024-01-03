// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_2 - https://rahulshettyacademy.com/angularAppdemo/products/1', function () {
    response = http.get(
      'https://rahulshettyacademy.com/rs_admin/public/images/courses/selenium-webdriver-with-java-basics-advanced-interview-guide_1591014934_selenium.jpg',
      {
        headers: {
          referer: 'https://rahulshettyacademy.com/angularAppdemo/products/1',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  group('page_3 - https://rahulshettyacademy.com/angularAppdemo/products', function () {
    response = http.get(
      'https://rahulshettyacademy.com/rs_admin/public/images/courses/selenium-webdriver-with-java-basics-advanced-interview-guide_1591014934_selenium.jpg',
      {
        headers: {
          referer: 'https://rahulshettyacademy.com/angularAppdemo/products',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://rahulshettyacademy.com/rs_admin/public/images/courses/cypress-modern-automation-testing-from-scratch-framework_1609261074_azure.jpg',
      {
        headers: {
          referer: 'https://rahulshettyacademy.com/angularAppdemo/products',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg',
      {
        headers: {
          referer: 'https://rahulshettyacademy.com/angularAppdemo/products',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  group('page_4 - https://rahulshettyacademy.com/angularAppdemo/products/2', function () {
    response = http.get(
      'https://rahulshettyacademy.com/rs_admin/public/images/courses/cypress-modern-automation-testing-from-scratch-framework_1609261074_azure.jpg',
      {
        headers: {
          referer: 'https://rahulshettyacademy.com/angularAppdemo/products/2',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  group('page_5 - https://rahulshettyacademy.com/angularAppdemo/cart', function () {
    response = http.get(
      'https://rahulshettyacademy.com/rs_admin/public/images/courses/selenium-webdriver-with-java-basics-advanced-interview-guide_1591014934_selenium.jpg',
      {
        headers: {
          referer: 'https://rahulshettyacademy.com/angularAppdemo/cart',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    response = http.get(
      'https://rahulshettyacademy.com/rs_admin/public/images/courses/cypress-modern-automation-testing-from-scratch-framework_1609261074_azure.jpg',
      {
        headers: {
          referer: 'https://rahulshettyacademy.com/angularAppdemo/cart',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}

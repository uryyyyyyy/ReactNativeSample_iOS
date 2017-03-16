import Foundation
import Firebase

@objc(MyModule)
class MyModule: NSObject {
  
  @objc(callFunc:)
  func callFunc(num: NSInteger) {
    print("num");
    print(num);
    FIRAnalytics.setUserPropertyString("favorite", forName: "curry")
    
    FIRAnalytics.logEvent(withName: kFIREventSelectContent, parameters: [
      kFIRParameterContentType:"count" as NSObject,
      kFIRParameterItemID:"1" as NSObject
      ])
  }
  
  @objc(openView)
  func openView() {
    print("openView");
    
    let uiViewController = FirebaseAuthViewController()
    let appDelegate:AppDelegate = UIApplication.shared.delegate as! AppDelegate
    let rootViewController:UIViewController = appDelegate.rootViewController!
    rootViewController.present(uiViewController, animated: true, completion: nil)
  }
}

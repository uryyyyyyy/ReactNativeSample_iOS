import Foundation

@objc(MyModule)
class MyModule: NSObject {
  
  @objc(callFunc:)
  func callFunc(num: NSInteger) {
    print("num");
    print(num);
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

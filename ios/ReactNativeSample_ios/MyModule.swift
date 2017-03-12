import Foundation

@objc(MyModule)
class MyModule: NSObject {
  
  @objc(callFunc:)
  func callFunc(num: NSInteger) {
    print("num");
    print(num);
  }
}

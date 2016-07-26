	__nest__ (
		__all__,
		'div_fixes', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var aB = __init__ (__world__.div_fixes.issue55).aB;
					var anA = __init__ (__world__.div_fixes.issue55).anA;
					var f1 = __init__ (__world__.div_fixes.issue55).f1;
					var p = __init__ (__world__.div_fixes.issue55).p;
					var q = __init__ (__world__.div_fixes.issue55).q;
					var r = __init__ (__world__.div_fixes.issue55).r;
					var y = __init__ (__world__.div_fixes.issue55).y;
					var run = function (autoTester) {
						autoTester.check ('Issue 40');
						autoTester.check (65 / (5 * 2));
						autoTester.check ('Issue 24');
						var py_switch = false;
						autoTester.check (py_switch);
						autoTester.check ('Issue 37');
						autoTester.check (Math.floor (15 / 7));
						autoTester.check ('Issue 27');
						autoTester.check (list (['zero', 'one', 'two', 'three', 'four']).index ('three'));
						autoTester.check ('Issue 36');
						var results = list ([]);
						for (var i = 0; i < 10; i++) {
							results.append ((function __lambda__ (j) {
								return (function __lambda__ () {
									return j;
								});
							}) (i));
						}
						autoTester.check (function () {
							var __accu0__ = [];
							var __iterable0__ = results;
							for (var __index0__ = 0; __index0__ < __iterable0__.length; __index0__++) {
								var result = __iterable0__ [__index0__];
								__accu0__.append (result ());
							}
							return __accu0__;
						} ());
						autoTester.check ('Issue 50');
						autoTester.check ((Math.floor (((240 + 30) - 1) / 30)) * 30);
						autoTester.check ('Issue 51');
						var a = 1;
						var b = 1;
						autoTester.check (a, b, new set ([a, b]) == new set ([1, 2]));
						autoTester.check ('Issue 52');
						var __left0__ = tuple (['switch', 'case', 'default']);
						var py_switch = __left0__ [0];
						var py_case = __left0__ [1];
						var py_default = __left0__ [2];
						autoTester.check (py_switch, py_case, py_default);
						autoTester.check ('Issue 54');
						var aDict = dict ({1: 11, 2: 22, 3: 33});
						autoTester.check (aDict);
						aDict.clear ();
						autoTester.check (aDict);
						autoTester.check ('Issue 60');
						var three = 3;
						var one = three & 1;
						var seven = three | 4;
						var eight = one << 3;
						var four = eight >> 1;
						var aTrue = bool (three & one);
						var aFalse = bool (three & four);
						autoTester.check (3, three, 1, one, 7, seven, 8, eight, 4, four, true, aTrue, false, aFalse);
						autoTester.check ('Issue 65');
						var aList = list ([4, 5, 6]);
						__call__ (autoTester.check, __add__ (__add__ (list ([1, 2, 3]), aList), list ([4, 5, 6])));
						__call__ (autoTester.check, __mul__ (3, list ([1, 2, 3])));
						__call__ (autoTester.check, __mul__ (list ([1, 2, 3]), 3));
						var aString = 'Crocodile';
						__call__ (autoTester.check, __add__ (__add__ ('Tiger', aString), 'Elephant'));
						__call__ (autoTester.check, __mul__ (3, aString));
						__call__ (autoTester.check, __mul__ (aString, 3));
						autoTester.check ('Issue 76');
						var initially17 = 17;
						autoTester.check (initially17);
						var initially17 = Math.floor (initially17 / 2);
						autoTester.check (initially17);
						var initially17 = Math.floor (initially17 / 2);
						autoTester.check (initially17);
					};
					__pragma__ ('<use>' +
						'div_fixes.issue55' +
					'</use>')
					__pragma__ ('<all>')
						__all__.aB = aB;
						__all__.anA = anA;
						__all__.f1 = f1;
						__all__.p = p;
						__all__.q = q;
						__all__.r = r;
						__all__.run = run;
						__all__.y = y;
					__pragma__ ('</all>')
				}
			}
		}
	);
